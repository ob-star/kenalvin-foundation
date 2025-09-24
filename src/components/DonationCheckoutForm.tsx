// src/components/DonationCheckoutForm.tsx
import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      "::placeholder": { color: "#a0aec0" },
    },
    invalid: { color: "#e53e3e" },
  },
};

const DonationCheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [amount, setAmount] = useState(25); // default donation
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage("");

    try {
      // 🔑 Call your backend to create PaymentIntent
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }), // cents
      });

      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (result.error) {
        setMessage(result.error.message || "Payment failed");
      } else if (result.paymentIntent?.status === "succeeded") {
        setMessage("🎉 Donation successful! Thank you for your support.");
      }
    } catch (err) {
      setMessage("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h4 className="text-xl font-semibold text-center">Make a Donation</h4>

      {/* Donation presets */}
      <div className="flex gap-3 justify-center">
        {[10, 25, 50].map((val) => (
          <button
            type="button"
            key={val}
            onClick={() => setAmount(val)}
            className={`px-4 py-2 rounded-lg border ${
              amount === val
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            ${val}
          </button>
        ))}
      </div>

      {/* Custom input */}
      <div>
        <label className="block mb-1 text-sm">Custom Amount</label>
        <input
          type="number"
          min={1}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Stripe CardElement */}
      <div className="border p-3 rounded-lg">
        <CardElement options={CARD_OPTIONS} />
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        {loading ? "Processing..." : `Donate $${amount}`}
      </button>

      {message && (
        <p className="text-center text-sm mt-3 text-green-600">{message}</p>
      )}
    </form>
  );
};

export default DonationCheckoutForm;
