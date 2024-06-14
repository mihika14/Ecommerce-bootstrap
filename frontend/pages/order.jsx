// Order.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '@/components/Headernew';

const Order = () => {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/orders/", {
          auth: {
            username: "admin",
            password: "admin1",
          },
        });
        setOrderData(response.data);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrderData();
  }, []);

  if (!orderData) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Header/>
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            {orderData.map((order) => (
              <div
                key={order.id}
                className="card border-top border-bottom border-3 mb-4"
                style={{ borderColor: "#f37a27" }}
              >
                <div className="card-body p-5">
                  <p className="lead fw-bold mb-5" style={{ color: "#f37a27" }}>
                    Purchase Receipt
                  </p>

                  <div className="row">
                    <div className="col mb-3">
                      <p className="small text-muted mb-1">Status</p>
                      <p>{order.status}</p>
                    </div>
                    <div className="col mb-3">
                      <p className="small text-muted mb-1">Order No.</p>
                      <p>{order.id}</p>
                    </div>
                  </div>

                  <div
                    className="mx-n5 px-5 py-4"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    {order.items_detail.map((item, index) => (
                      <div key={index} className="row mb-2">
                        <div className="col-md-8 col-lg-9">
                          <p className="mb-0">Product ID: {item.product}</p>
                        </div>
                        <div className="col-md-4 col-lg-3">
                          <p className="mb-0">Unit Price: ${item.unit_price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row my-4">
                    <div className="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                      <p
                        className="lead fw-bold mb-0"
                        style={{ color: "#f37a27" }}
                      >
                        Total: ${order.total}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 pt-2 mb-0">
                    Need any help?{" "}
                    <a href="#!" style={{ color: "#f37a27" }}>
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Order;
