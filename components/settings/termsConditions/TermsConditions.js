import React from 'react'
import { Row, Col, Tabs } from 'antd';
import './TermsConditions.scss';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const TermsConditions = (props) => {

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="terms">
            <Tabs
              defaultActiveKey="1"
              onChange={callback}
              tabPosition="top"
            >
              <TabPane tab="Terms of Privacy" key="1">
                <div className="list">
                  <div className="list-item">
                    <div className="serial">1.</div>
                    <div className="content">
                      <div className="heading">Privacy Introduction</div>
                      <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus deleniti debitis dolore dignissimos dolorum possimus adipisci, ullam aliquam amet magnam repudiandae, cupiditate autem, a saepe vero quas eaque quaerat...
                        <span className="more">Learn More</span>
                      </div>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="serial">2.</div>
                    <div className="content">
                      <div className="heading">Privacy Introduction</div>
                      <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus deleniti debitis dolore dignissimos dolorum possimus adipisci, ullam aliquam amet magnam repudiandae, cupiditate autem, a saepe vero quas eaque quaerat...
                        <span className="more">Learn More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Privacy Policy" key="2">
                <div className="list">
                  <div className="list-item">
                    <div className="serial">1.</div>
                    <div className="content">
                      <div className="heading">Privacy Introduction</div>
                      <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus deleniti debitis dolore dignissimos dolorum possimus adipisci, ullam aliquam amet magnam repudiandae, cupiditate autem, a saepe vero quas eaque quaerat...
                        <span className="more">Learn More</span>
                      </div>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="serial">2.</div>
                    <div className="content">
                      <div className="heading">Privacy Introduction</div>
                      <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus deleniti debitis dolore dignissimos dolorum possimus adipisci, ullam aliquam amet magnam repudiandae, cupiditate autem, a saepe vero quas eaque quaerat...
                        <span className="more">Learn More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </Col>

      </Row>

    </div>
  )
}

export default TermsConditions
