export default function DeliveryInformationPage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <h1>Delivery Information</h1>
      <p>
        {
          "We are thrilled to offer delivery to all of Canada! Whether you reside in a major city or a remote area, we are committed to bringing the beauty of plants right to your doorstep."
        }
      </p>

      <div className="flex w-full flex-col gap-4">
        <h2>{"Delivery Options"}</h2>
        <ul className="list-disc list-inside flex flex-col w-full gap-4">
          <li>
            {
              "Standard Delivery: Enjoy our reliable standard delivery service for all online orders. Each plant is meticulously packaged to ensure it arrives in perfect condition."
            }
          </li>
          <li>
            {
              "Express Delivery: Need your plants in a hurry? Our express delivery option prioritizes your order for faster shipping, ensuring you receive your plants as soon as possible."
            }
          </li>
        </ul>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h2>{"Delivery Times"}</h2>
        <p>
          {
            "Orders are typically processed within 1-3 business days. You will receive a confirmation email once your order has been shipped."
          }
        </p>
        <h3>{"Estimated Delivery Time:"}</h3>
        <ul className="list-disc list-inside flex flex-col w-full gap-4">
          <li>
            {"Standard Delivery: Expect your order within 3-7 business days."}
          </li>
          <li>
            {
              "Express Delivery: Your order will arrive within 1-2 business days."
            }
          </li>
        </ul>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h2>{"Contact Information"}</h2>
        <ul className="list-disc list-inside flex flex-col w-full gap-4">
          <li>{"Standard Delivery Fee: $5."}</li>
          <li>{"Express Delivery Fee: $15."}</li>
          <li>
            {
              "Enjoy free shipping on orders over $100. Check our website for more details!"
            }
          </li>
        </ul>
      </div>
    </div>
  );
}
