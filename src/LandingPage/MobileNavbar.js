import React from 'react'
import { Col, Row } from 'reactstrap'
import Button from '../CustomFiles/Button'
import drugcipherIcon from '../image/DRUG CIPHER (2).png'
export default function MobileNavbar() {
    return (
        <div className='nav_bar mobile_nav_bar'>
            <Row className='m-0'>
                <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                    <img src={drugcipherIcon} className='mt-2' alt='drugcipherlogo' style={{ width: 55, borderRadius:10 }} />
                    <h6 className='dc-name'>DrugCipher</h6>
                </Col>
                <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                <Col xl={4} lg={4} md={4} sm={4} xs={4} className='nav_menuu'>
                </Col>
                <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                <Col xl={2} lg={2} md={6} sm={6} xs={6}>
                    <a href='https://app.drugcipher.com' target='_blank' rel='noreferrer'>
                        <Button className={'market_place_btn mt-3'} style={{ float: 'right' }} btnText={'Register'} />
                    </a>
                </Col>
            </Row>
        </div>
    )
}
