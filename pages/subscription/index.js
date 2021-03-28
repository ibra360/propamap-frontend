import React, {useState,useEffect} from 'react'
import AppLayout from '../../layouts/AppLayout';
import site from '../../core/config/sitemap';
import { Col, Row } from 'antd';
import './styles/Subscription.scss'
import Title from 'antd/lib/typography/Title';
import { Button } from '../../components/html';
import { getPlanAction } from '../../redux/actions/subscription';


const Subscription = () => {

  const [plans,setPlans] = useState([])

  useEffect(()=>{
    getPlans()
  },[])

  const getPlans = async () => {
    try{
      const res = await getPlanAction()
      setPlans(res)
    }
    catch(e){
      console.log('Error fetch plans',e)
    }
  }

  const setActive = index => {
    document.querySelectorAll('.plan').forEach(elem => {
      elem.classList.remove('active')
    })
    document.querySelectorAll('.plan')[index].classList.toggle('active');
  }

  return (
    <div className="subscription">
      <Row gutter={[24, 24]} justify="space-between" style={{ width: "100%" }} >

        <Col span={24}>
          <Title level={4}>Subscription Plan</Title>
        </Col>
        <Col span={24}>
          <div className="table">
            <div className="heading">
              <div className="title">Features</div>
              <div className="item">Advertisements</div>
              <div className="item">property images</div>
              <div className="item">Chat</div>
              <div className="item">Map visibility</div>
              <div className="item">social sharing</div>
            </div>
            <div className="plan" onClick={() => { setActive(0) }}>
              <div className="content">
                <div className="title">Individual Plan<br />(8.99 RM Monthly)</div>
                <div className="item">1 Advertisement Post (active for 1 month)</div>
                <div className="item">6 Property images per ad</div>
                <div className="item">Yes</div>
                <div className="item">Yes</div>
                <div className="item">Facebook, Whatsapp</div>
              </div>
              <div className="purchase">
                <Button
                  type='submit'
                  title='PURCHASE'
                  size='medium'
                  category='primary'
                />
              </div>
            </div>
            <div className="plan active" onClick={() => { setActive(1) }}>
              <div className="content">
                <div className="title">Professional Plan<br />(79.99 RM Monthly)</div>
                <div className="item">10 Advertisement Posts (Active for 1 month)</div>
                <div className="item">6 Property images per ad</div>
                <div className="item">Yes</div>
                <div className="item">Yes</div>
                <div className="item">Facebook, whatsapp</div>
              </div>
              <div className="purchase">
                <Button
                  type='submit'
                  title='PURCHASE'
                  size='medium'
                  category='primary'
                />
              </div>
            </div>
            <div className="plan" onClick={() => { setActive(2) }}>
              <div className="content">
                <div className="title">Agents Plan<br />(Coming Soon)</div>
                {/* <div className="item">Yes</div>
                <div className="item">Yes</div>
                <div className="item">Yes</div>
                <div className="item">Yes</div>
                <div className="item">Yes</div>
                <div className="item">Yes</div>
                <div className="item">No</div>
                <div className="item">No</div>
                <div className="item">No</div>
                <div className="item">No</div> */}
              </div>
              <div className="purchase">
                <Button
                  type='submit'
                  title='PURCHASE'
                  size='medium'
                  category='primary'
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

Subscription.getLayout = page => {
  return <AppLayout route={site.routes.Subscription}>{page}</AppLayout>;
};

export default Subscription

