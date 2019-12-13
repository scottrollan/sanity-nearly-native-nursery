import React from "react";

function OrderForm(props) {
  const { heading, label } = props;

  return (
    <section id="orderForm">
      <embed src='https://cdn.sanity.io/files/ogg4t6rs/production/fb00e959f5eed3fed469f42cf0e01dc008f5150b.pdf' />
      <style jsx>{`
        embed {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
}

export default OrderForm;
