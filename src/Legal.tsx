import React from 'react';
import { Trans } from 'react-i18next';

export default function Legal() {
  return (
    <div className="container">
      <div className="col-xm-12">
        <div id="dtr-wrapper" className="clearfix">
          <div id="dtr-page-title-main">
            <div id="dtr-page-title-wrapper">
              <div className="dtr-container">
                <div className="dtr-page-title text-center" itemProp="headline">
                  Legal Stuff
                </div>
              </div>
            </div>
          </div>
          <div id="dtr-main-wrapper" className="dtr-container clearfix dtr-fullwidth">
            <main id="dtr-primary-section" className="dtr-content-area">
              <div className="dtr-primary-section-content">
                <article id="post-3" className="post-3 page type-page status-publish hentry dtr-first-post">
                  <div className="entry-content">
                    <div data-elementor-type="wp-page" data-elementor-id="3" className="elementor elementor-3" data-elementor-settings="[]">
                      <div className="elementor-section-wrap">
                        <section className="elementor-section elementor-top-section elementor-element elementor-element-092b4a8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="092b4a8" data-element_type="section">
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-845d4b7" data-id="845d4b7" data-element_type="column">
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-0badf10 elementor-widget elementor-widget-text-editor" data-id="0badf10" data-element_type="widget" data-widget_type="text-editor.default">
                                  <div className="elementor-widget-container">
                                    <p>
                                      <a href="#PrivacyPolicy" rel="noopener">
                                        Privacy
                                        Policy
                                      </a>
&nbsp; |&nbsp;&nbsp;
                                      <a href="#TOU" rel="noopener">TOU</a>
&nbsp;
                                      |&nbsp;&nbsp;
                                      <a href="#EULA" rel="noopener">EULA</a>
&nbsp;
                                      |&nbsp;
                                      <a href="#CardHolderT&amp;C" rel="noopener">
                                        Card
                                        Holder T&amp;C
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className="elementor-section elementor-top-section elementor-element elementor-element-1be1175c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1be1175c" data-element_type="section">
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3b1b0494" data-id="3b1b0494" data-element_type="column">
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-751d6806 elementor-widget elementor-widget-text-editor" data-id="751d6806" data-element_type="widget" data-widget_type="text-editor.default">
                                  <div className="elementor-widget-container">
                                    <p id="TOU" />
                                    <Trans
                                      i18nKey="legal.text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
