"use client";
import { useEffect, useState } from "react";
import getCartPost from "../api/cartPost";
import CartItem from "./CartItem";
import { getServerUrl } from "../api/server";
import DeleteButton from "./DeleteButton";

interface CartData {
  id: string;
  totalPriceBeforeFeesAndTaxes: {
    priceFormatted: string;
  };
  totalTaxes: {
    priceFormatted: string;
    currencyCode: string;
  };
  shippingFee: {
    priceFormatted: string;
  };
  orderLines: {
    productImage: string;
    productName: string;
    quantity: number;
    id: string;
    price: {
      priceFormatted: string;
    };
  }[];
}

export default function CartComponent() {
  const [cartData, setCartData] = useState<CartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: CartData = await getCartPost();

        setCartData((prevCartData) => ({
          ...prevCartData,
          ...data,
          orderLines: data.orderLines
        }));
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteItem = (itemId: string) => {
    setCartData((prevCartData) => {
      if (!prevCartData) {
        return prevCartData;
      }

      const updatedOrderLines = prevCartData.orderLines.filter(
        (item) => item.id !== itemId
      );

      return {
        ...prevCartData,
        orderLines: updatedOrderLines
      };
    });
  };

  return (
    <div className="">
      <h3>Shopping cart</h3>
      {cartData ? (
        <div className="d-flex ">
          <div className="col-7 p-5 bg-body">
            {cartData.orderLines.map((orderLine, index) => (
              <p key={index}>
                <div className="d-flex">
                  <div>
                    <img
                      src={getServerUrl(orderLine.productImage)}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="row row-cols-lg-4 d-flex mx-auto gap-5 ">
                    <div>
                      <p>Name</p>
                      {orderLine.productName}
                    </div>
                    <div>
                      {cartData ? (
                        <div>
                          <p>Quantity</p>
                          <CartItem
                            key={index}
                            orderLine={orderLine}
                            onDelete={handleDeleteItem}
                          />
                        </div>
                      ) : (
                        <p>Loading cart data...</p>
                      )}
                    </div>
                    <div>
                      <p>Price</p>
                      {orderLine.price.priceFormatted}
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <DeleteButton
                    itemId={orderLine.id}
                    onDelete={handleDeleteItem}
                  />
                </div>
              </p>
            ))}
          </div>
          <div className="col-3 p-3 mx-auto bg-body">
            <h3>Order total</h3>
            <div className="d-flex justify-content-between ">
              <p>VAT:</p>
              <p>{cartData.totalTaxes.priceFormatted}</p>
            </div>
            <div className="d-flex justify-content-between ">
              <p>Currency: </p>
              <p>{cartData.totalTaxes.currencyCode}</p>
            </div>
            <div className="d-flex justify-content-between ">
              <p>Delivery Fee:</p>
              <p>{cartData.shippingFee.priceFormatted}</p>
            </div>
            <div className="d-flex justify-content-between ">
              <p>Total</p>
              <p>{cartData.totalPriceBeforeFeesAndTaxes.priceFormatted}</p>
            </div>
            <button
              type="button"
              className="btn mb-4 mt-4 p-2 cta-button text-decoration-none button-text-color">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Loading cart data...</p>
      )}
    </div>
  );
}
