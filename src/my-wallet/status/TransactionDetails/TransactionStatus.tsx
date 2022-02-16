import {
  Suspense, useEffect, useState, lazy,
} from 'react';
import { useParams } from 'react-router-dom';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import Api, { Transaction } from '../../../api';
import { useAppSelector } from '../../../app/hooks';
import { selectUser, UserState } from '../../../features/user/userSlice';
import { TransactionTypeEnum } from './TransactionTypeEnum';
import { TransactionStatusEnum } from './TransactionStatusEnum';
import PageContainer from '../../../common/PageContainer';

export interface TransactionInterface {
  type: TransactionTypeEnum;
  status: TransactionStatusEnum;
  id: string;
}

export interface TransactionProps {
  user: any;
  transaction: Transaction | undefined;
  setCurrentStatus: any;
}

export default function TransactionStatus() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const { type, status, id } = useParams<Partial<TransactionInterface>>();
  const [currentType] = useState<TransactionTypeEnum>(type as TransactionTypeEnum);
  const [
    currentStatus,
  ] = useState<TransactionStatusEnum>(status as TransactionStatusEnum);
  const [transaction, setTransaction] = useState<Transaction | undefined>(undefined);
  const [userState, setUserState] = useState<UserState>({
    firstName: null,
    lastName: null,
    email: null,
  } as UserState | any);
  let user: any;
  if (isAuthenticated) {
    ({ user } = useAppSelector(selectUser));
  } else {
    ({ user } = {
      user: {
        firstName: null,
        lastName: null,
        email: null,
      } as any,
    } as unknown as UserState);
  }

  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransaction(Number(id))
      .then((data) => setTransaction(data));
    setUserState(user);
  }, []);

  const TransactionComponent = lazy(() => import(`./${type}/${status}/${type?.replace(/^./, (str) => str.toUpperCase())}${status?.replace(/^./, (str) => str.toUpperCase())}`));

  return (
    <>
      <PageContainer
        title="Transactions History"
        subTitle="Made Fun With Zippy!"
        className="status-list"
        backdropImage="backdrop-image-3"
      >
        <div className="details">
          <Suspense fallback={<div>Loading...</div>}>
            { currentType && currentStatus
            && (
              <TransactionComponent
                transaction={transaction}
                user={userState}
              />
            )}
          </Suspense>
        </div>
      </PageContainer>
    </>
  );
}