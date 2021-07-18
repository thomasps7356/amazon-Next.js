import Button from "components/buttons/Button";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

interface PaymentButtonsProps {}

const PaymentButtons: React.FC<PaymentButtonsProps> = () => {
  const { paymentMethod, disabled, processing, cardHolder, error, succeeded } =
    useStore().paymentStore;

  return (
    <div className="mt-8 flex flex-col space-y-4">
      <Button
        disabled={
          paymentMethod === "card" ||
          disabled ||
          processing ||
          cardHolder === "" ||
          !!error
        }
        onClick={() => alert("TODO")}
        variant="primary"
        className="!transform-none uppercase"
      >
        {processing
          ? "Processing..."
          : succeeded
          ? "Success!"
          : paymentMethod === "cash"
          ? "Confirm Order"
          : "Pay Now"}
      </Button>
      <Button
        onClick={(e) => alert("TODO")}
        disabled={processing}
        variant="outlined"
        className="text-[#635bff] opacity-90 
        !border-[#635bff] !border-opacity-50"
        style={{ boxShadow: "0 0.5rem 1rem rgba(99, 91, 255, 0.15)" }}
      >
        <span>Pay via</span>

        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img src="/logos/stripe.svg" alt="Stripe" className="h-6" />
      </Button>
    </div>
  );
};

export default observer(PaymentButtons);
