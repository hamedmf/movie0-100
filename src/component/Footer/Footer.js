import React from "react";
import { Row,Col,Steps } from "antd";
import Classes from './Footer.module.scss'



import {
  GithubOutlined,FacebookOutlined,InstagramOutlined,LinkedinOutlined
} from '@ant-design/icons';

const { Step } = Steps;
export default function FooterSite() {
  return (
    <section>
      <div className={Classes.FotoerSection}>
        <div>
          <Row className={Classes.IconLists}>
            <Col md={4} sm={4}></Col>
            <Col md={4} sm={4}>
              <div>
              <GithubOutlined />      
              </div>
            </Col>
            <Col md={4} sm={4}>
              <div>
              <InstagramOutlined />
              </div>
            </Col>
            <Col md={4} sm={4}>
              <div>
              <LinkedinOutlined />
              </div>
            </Col>
            <Col md={4} sm={4}>
              <div>
              <FacebookOutlined />
              </div>
            </Col>
            <Col md={4} sm={4}></Col>
          </Row>
        </div>
        <div style={{textAlign:"center",paddingTop:"20px"}}>
            <p>Copy Right From Hamed, All Right Reversed</p>
        </div>
      </div>
    </section>
  )
}

