import visa from "../../../assets/images/visa.png";
import mastercard from "../../../assets/images/mastercard.png";
import applePay from "../../../assets/images/applePay.png";
import gpay from "../../../assets/images/gpay.png";
import paypal from "../../../assets/images/paypal.png";

const paymentMethods = [
  { src: visa, alt: "visa" },
  { src: mastercard, alt: "mastercard" },
  { src: applePay, alt: "apple pay" },
  { src: gpay, alt: "gpay" },
  { src: paypal, alt: "paypal" },
];

const PaymentMethods = () => {
  return (
    <>
      <p className="mb-4 text-lg font-semibold">We accept Payment methods:</p>
      <ul className="flex flex-row gap-2">
        {paymentMethods.map((method) => (
          <li key={method.alt}>
            <img src={method.src} alt={method.alt} className="w-16" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PaymentMethods;
