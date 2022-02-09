import { Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import PageContainer from '../../../common/PageContainer';

export default function LoadStatus() {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <PageContainer title="Personal Banking" subTitle="Made Fun With Zippy!">
      <div className="title">
        Fund Transfer
      </div>
      <div className="text-center">
        {state.status === 'In_Progress' && (
          <img height={40} width={40} src="data:image/png;base64,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" alt="" />
        )}
        {state.status === 'Success' && (
          <img height={60} width={60} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiasGIxFBoQcTrzg0bo5XCQVFIOg_lyreZ2AN96Pdi670ZPLPsl58NCLOTmSlpZiZ6tA4&usqp=CAU" alt="" />
        )}
        {state.status === 'Failure' && (
          <img height={60} width={60} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAyVBMVEX////NAQS6AAH//v/OAADMAQSoAADLAADGAAC9AAD///3CAAC1AAC6AAKrAAC/AAD/9fb/8vTyztCxAADZm53ns7bBQkbswcT/+fv+8PLos7b75unFT1P43N7alZnAFhu1QUP/6u31y8zhuLzepqrUfIC8GyDPbnC/NTnBKCy8LjDKbXK5TU/ViYzEPEDKYWXOX2LywMLaqKvFU1jbhYa9Mzy8DRLPmZvIc3XIZWjCbG/OgYS7QEOsDRH01da4GyKsOj67VVqbAABwbE8AAAANPElEQVR4nO1dDXeiyBIlgAEaEGIUTaLOaEzMmDEfm93s5M085+37/z9qu5sGqqEb0MSYJtwzmZMTUOlrVfWt6i9Na9GiRYsWLVq0aNGiRYsWLVq0aNGiRYu3AiL/GfzfDMMAl9H7PtBHRcqEIb4u+fNnBNIyA9KMcDaZz+dD/DOZhQa4qQXA5HK9jK49z9OdIAgcHf92HS3Xl5NDP9jHwklvOtYD27Is0zwioP+bGJZtO3o0nZ8c+hEPCOBTk8WT52KWjmTAjLneU/9T2xeJRrNFFLglPKV8Wa4TLWbkZSgm+rNFsPlSt2sQhdEh5mU7yzkhmHacn6d3xM0dDe6cekRhpjrMuvS7wejQz/7uGJ2vmO91allV5our80/mg4OVW8+kioSZ7mpw6MffO3BQRnFE30SuJTWd6j9bbrQ5dGPeAQZmLLzS80zFtHTEhAn+aulXYbPdMG7b8NqWuh+Vnwzkd/mN9vXwwK3ZN4hRBWICiEZ3g+voafnntN/vT/9cPv26DrCYx4SJ7M0Mmm5akxuhUeHuLfi2XPQuQu7uk4veYvmtKFY75J9p3zRYyiNtIIpUJIV5Ob+Qvuzi/MUTantLH8Rv2ywgKrPXOt/iDo083sswrHh5OMQK3wSvYizra61xXNHmjO5djifKVLBaVBFFpYYW9ldOIdab7n3jZDxp7UlkH+UEgBWMH7Vqw0DshsdxkHdh047O9v3w7w2kzW7sfDuDaBhfKycLMbbwzzAq9KLWX7P3aMB7Yray+GCDFdKAFQ2qLctIbzgvqDNr1RiyDGo2Z6uc91jOz8o4JURR9Vurxrgh6QLDG759pr3q7fZm+Ke3ynmz9VcIxzeURdyEsQW8D8tI5+o13dcIa3+uj7DHDWCK4ZY3BFPfuagS1yqwpuWClmnfNkVlTfnOy7qeYMfcuW3UhCa/M6cmJhZM3+5xDwZsBkPeCGJF9FqnOYtiW2WlVVNXv+yArefimafqAYQqtI11xToMsd9HD5xjm8/yhFIFxOMt47RNxFnsfFKynYGhRGthsu7trMPoHFljpUMWNYSpy1nVPeHGSG/Yvn0ofl9skcY9Z1nuVOE0mtYWJjrs3q3xiGvQFm0T2N9oDFWb6U1UJgv/cCLUuhmlFwj+DrdwQYRNqTfU0qDFS1wy2HqjLlUEC+iB5jOfuf3ofqfc1W5hr3vMujtG2IzrN+zF2z34O4OkgVAumDqf1/w41b3v9fR7zGavq+uMLMQCfI//gJnClnUFo2/Qzy4gSpVekyysXPELesf4BZSstDaBtL4Lhi6sq/004z0wgd+6dc95G6WKkGVU1/rovw2lKrWsBA8gIJqOuqMVL6AdFg5WRlbWI1T55F9sWZXVPmZVGE5KFp0sw4Us62WPrdkrNg5oRjAAshtT5bCm13FD5oCU28QN0w70PMjsytQVHLynlNxDs3qAl29P9QwJWeJ0GlHrSa0qdsNHeAf3McoZVtzoCTArU58AP/sBqSJkhZrEDdlkEZ4q4IYEF3oW3lWNWLATtNfgwn94qvyYLGmMR3mq8gF+TT+ok3WFSlX+SBd/5mXZjamnJXF85Wc33/TYskRNpGKhcL9+DKXamQ8M2DlTMNNZQLOacs8vIksc4DNdJaOK3DEFH+UqJ95xnL7LQq7pgTEb0oPVJ4tR5ReogtyHQMeZ0T7btQ8gLrLjaAWbhslad/Pt93K5ocG6xYJVObFVcQ67Bt+Lrl50X9vg8WnNMqOBXO46OQ54UWowtV7ugAkuvOyLsdQqvZMGg8FTnN3kqnrMsvJkhdx7GAKqfCFVnMayVvtt3NtjAr5pl3bwwGniCUalZBl8YpNzQC3f1w1B7UdXq/KOtAWIIL9Hwm6cJ8vPW5bcAUGulGD0BURH1XrCexBAZJUSaYBn4HWV78sckOAKOOGD5J4PihGQh85cdhcJ8JAsPyOrYFW+JKwz9LK1BeazSvPXkLZxMhf8Ilv8h0p7wxIHFOAkdcKO6e02r+QwQFC0l7gEKgR4P02kWRGGo6qs4HKvbMBaWjWenJgIT5aTBniRVW3KxqnBt2Pe7qFF+wNIcAKhNTAFUbSsmKxeIexTqgzyOnEVYZPlOWakUqEBZP7mc9msO4kofeStytfLwjoB0s6yWrLp7DZl8DAAStT8XnqniCzH4wpcRCvo3V5JWYp6ZpSZsqOSGn0E3WB58GC5Ia8ceCRUVVSlkhDZSRIFRQACrd2vLr0V3ZC3s1gsyIMQrTT3wWf+8aat2S+mmT+4deY7VpBFxIJoy5kU5OIl4Gotue8j4jblytSlqj0FZmCaS2c4fywXCwl6WfpsLTV1CsmZMDS9enE2F7MgV6USNMOFXkf+fjw8ZVzpNSfqF9OdxAGrwzpFmM3gVWqO39cdtI4kZnVrJXcGz1WkEFe/0tFN80vtpF9Ilri0lwMN+WEmRq271zz8+8L4ldnVdf0CyZVXoOqU9Qw1zASU+0yFuNIAVzXtCpMxF9nV99rpSiO4qrGUktwyL1YW9PyAhQQq+yCJ7Um80quX6FL1JKQKSwbvK61nVRBeiO3q4CnjyquhGcTDEIllYbK21wzqAGjR02otmlAlFFg+s6xKqKpFb610ikyNHKfMqnxmWXEmKLEvelHVHGfL3Fkc1nk3LGs77RxUzZ0X2bIiuy+9K5l6janK1a8KozuELEMa4Gm5RtWazGMWZ0mtr7TyVNBVpPMTxawyp0Lq1vpq1pCRRFf996o4FFYa4MkbgRpyoFIN+QQMFDyX7KPKdFWuGtPdiGrwFb0hHJsIVBqb0O7Ag0vKT3T8ircqP6GKJtI5BjOyhM64ySSDWmNe1WOpLE4LHJDWq4Tjhl9lE3AJshJ/R6mxVDhG3xELQySdNrthGmB9zPeGvp/orKJdIXXH6BFcXmJ+EUQPlMYqAVVabD1ToWVJ1v2egAlYukpzP3JzikQ9OGnvUEgVdTIazKaF65IAbyCg2jvms1KhHVXOVZP2gBQsKOUsy5eSpfJctcIcSJQtIUk8SOCA3U3OwabF+VlJusM7otJzIDM12olldDpszLZYKFDlp1YFUIhZTGflQxaYW2uqNbdWOGebv4ypyptMN+kBIcRumMsMEZyzbSo3Z1uwFgBC1gMW96MrBHiRgld4LQBBbo0JLyHFPWCyWpCHWDrwUHiNCV1KKlu7pEmpkqBaOqi9dkkrrIkD8VjSA4pRmBjCVR3iwJVfE6dKSZSCrrX0wdJaPy02GNqGT178UqqECh6T9T/grPiTslWdztl2O0V9DIjX8CIt/Cc/vswcUF5Nz085crqZhkKwG1FvOwvx2vD0opEjSygWUlADylnW8QLcfgGjlTNRywO1wp4DHbrrRwqerFrzqziyOKrinT+YE1ovylEVQ76XRUqW7+vH9batStMdrO/Z0EP8KrCXxZGSe1nEyO+RklEyejllUx2Pa8khGLMoVUhjxwnxe6TcV7zPRwXi996xub13Rv+c6kkOWMdrjNSyjv9I93Ig/z0AR1d1JwsK6Z5OhCwP9IC1ggy1LEJVkofjVzVjTyeqsUr2CjOwZbHEpm44xmQdM7HAXjUnH5CqOIX3CkOCPejSIhaRDsm89doNnP5/wXE7AzmzgoWrHIp7G4KYtWWhCXseH92SvQ3ZVjI3b/TMB0C8Zyb/zY/5jSC33CbH4DVrbs9MKneVGhkEYHuxcmSRvVi5SL5NgDHYbljxW6MG7cUaRxYDfPkdwR6/tWFknR+tQo9eAFVkj1/x0KE6QGTvaO5MAPsBzqXaom3wZGyM8IE7eILtHa0yV+TppXuS79Cw9CXJnuRpsFJpGlEJpgFs1pH1+/W1ALjXPR0qUq/ILsEtF1nYGQo70iU6Q+HIVmm2hxw0zIxtzgpeczYHImdzODxVSs3RLkNy5gs8eWTnM1/oppCFM19uwrop5YcGi+HFs4ToKZ47IPwpPkuoZDm0aiiQRc6o0pJ0sIZNMBE6aPIZVRSYC8HZZ06U7MZeylWSLCNy9lkuUhEHbBZVtJ0nUZ6s5Ey9arOK/Utwpt5RA8/UI3zwZzXGpmU6Nc5qpAgX9KxG/pjZJp7VyJA/AzSOW/pyuzNAwWvjM0DV7wE5sOZIz5ZdcmfL8q2/OF/Kz5ZtGE8pjDc8s/io4WcWE8jPwrboWdi/+LOwXXoWtvB+Bwu03U9Q+/ggziU/Y71Dzli3uEPWxTcSo/o9VL0CUw0kOMVza8Sqv8FUZU3bRG41W/EsBfFR9NEm/5YNxuAbK8OLuCiH6X57RUlHRYzOv7HuTWw7HMCp6pa7Oqf5+OfhisyiHdw5ItUk5KrDmHLuBk0V6hXoYTVejy5STbVs/TZZlP95rIogrrHMFpHjyqUB9D0nWpCKAkJbTYFoFib9J5LCyPkySRL01OeSoIM97cFxMp+OPce2LUgZkaLY72zHi6bzkjXTnxGTy/UyuvY8T3eCIHB0/Nt1tFxfNjzp2wVsImk4m8zn8+Fw3pvMQrYxylbTjj47WqISoPh8l0+kLlu0aNGiRYsWLVq0aNGiRYsWLVq0aHFQ/AtXZNp5MT8uXwAAAABJRU5ErkJggg==" alt="" />
        )}
      </div>
      <div className="details">
        {state.status === 'Success' && (
          <Row>
            <Col xs={12}>
              Your $
              {state?.amount}
              {' '}
              credited into your zippy account
            </Col>
          </Row>
        )}
        {state.status === 'In_Progress' && (
          <Row>
            <Col xs={12}>
              Your $
              {state?.amount}
              {' '}
              credited request is in progress
            </Col>
          </Row>
        )}
        {state.status === 'Failure' && (
          <>
            <Row>
              <Col xs={12}>
                Payment failed
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                Your money has not been credited
              </Col>
            </Row>

          </>
        )}
        {(state.status === 'Success' || state.status === 'In_Progress') && (
          <Row>
            <Col xs={12}>
              Your total available Zippy balance is
              {' '}
              <b>$200</b>
            </Col>
          </Row>
        )}
      </div>

      <div className="action">
        <Button
          className="zippy-btn"
          onClick={() => navigate('/')}
        >
          Close
        </Button>
      </div>
    </PageContainer>
  );
}
