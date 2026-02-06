"use client";

export default function ReturnPolicyPage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex w-full flex-col gap-4">
        <h1>Return Policy</h1>
        <p>
          {
            "At our plant store, we are committed to offering high-quality plants and outstanding customer service. If you are not fully satisfied with your purchase, please review our return policy below."
          }
        </p>
        <p>
          {
            "Returns for plants are accepted within 2 days of the purchase date, while returns for other items can be made within 30 days of the purchase date. To qualify for a return, products must be in their original condition and packaging, and must be unworn or unused."
          }
        </p>
        <p>
          {
            "A valid receipt or proof of purchase is necessary for all returns. Please note that certain items, including gift cards, sale items, and plants that have been damaged due to neglect or improper care, are non-returnable."
          }
        </p>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h2>{"Return Process"}</h2>
        <p>
          {
            "To begin the return process, please contact our customer service team by email or phone."
          }
        </p>
        <p>
          {
            "Once your return is approved, you will receive a return authorization number that must be included with your return. We recommend carefully packaging the plant in its original packaging to ensure it remains undamaged during transit."
          }
        </p>
        <p>
          {
            "Please note that customers are responsible for return shipping costs, unless the return is due to an error on our part, such as sending the wrong item or a defective product."
          }
        </p>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h2>{"Refunds"}</h2>
        <p>
          {
            "After we receive your returned item, we will inspect it and inform you of the approval or rejection of your refund. Refunds will be processed within 5-7 business days."
          }
        </p>
        <p>
          {
            "If approved, refunds will be issued to the original payment method used for the purchase."
          }
        </p>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h2>{"Contact Information"}</h2>
        <p>
          {
            "For any questions or concerns about our return policy, please feel free to contact us at info@yourstore.com."
          }
        </p>
        <p>
          {
            "Thank you for choosing our plant store! We value your business and are here to assist you with any inquiries or issues you may have."
          }
        </p>
      </div>
    </div>
  );
}
