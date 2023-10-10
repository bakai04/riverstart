import React from 'react'
import { Layout } from '../_layout'
import { customers } from './model/customers'
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';

export const OurCustomers = () => {
  return (
    <div className={style.our_customers}>
      <Layout className={style.our_customers__container}>
        <h2 className={style.our_customers__title}>Наши клиенты</h2>
        <div className={style.our_customers__customers_list}>
          <Swiper
            slidesPerView={4}
            grid={{
              rows: 2,
            }}
            wrapperClass={style.our_customers__slider_wrapper}
            modules={[Grid]}
            className={style.our_customers__customers_list}
            >
              {
                customers.map((elem, index) => (
                  <SwiperSlide key={index} className={style.customer}>
                    {elem.logo}
                    <p className={style.customer__period}>{elem.period}</p>
                  </SwiperSlide>
                ))
              }
          </Swiper>
        </div>
      </Layout>
    </div>
  )
}
