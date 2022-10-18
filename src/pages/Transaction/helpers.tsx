import React from "react";
import {
  LearnMoreTooltip,
  LearnMoreTooltipPlaceholder,
} from "../../components/IndividualPageContent/LearnMoreTooltip";

export function getLearnMoreTooltip(txnField: string): JSX.Element | null {
  switch (txnField) {
    case "accumulator_root_hash":
      return (
        <LearnMoreTooltip
          text="An accumulator root hash is the root hash of a Merkle accumulator."
          link="https://docs.bitindi.com/"
        />
      );
    case "amount":
      return <LearnMoreTooltipPlaceholder />;
    case "authentication_key":
      return <LearnMoreTooltipPlaceholder />;
    case "block_height":
      return <LearnMoreTooltipPlaceholder />;
    case "epoch":
      return <LearnMoreTooltipPlaceholder />;
    case "event_root_hash":
      return (
        <LearnMoreTooltip
          text="Learn more about Event"
          link="https://docs.bitindi.com/"
          linkToText
        />
      );
    case "expiration_timestamp_secs":
      return (
        <LearnMoreTooltip
          text="A transaction ceases to be valid after its expiration time."
          link="https://docs.bitindi.com/"
        />
      );
    case "gas_fee":
      return (
        <LearnMoreTooltip
          text="Learn more about Gas Price"
          link="https://docs.bitindi.com/"
          linkToText
        />
      );
    case "gas_unit_price":
      return <LearnMoreTooltipPlaceholder />;
    case "gas_used":
      return <LearnMoreTooltipPlaceholder />;
    case "id":
      return <LearnMoreTooltipPlaceholder />;
    case "max_gas_amount":
      return (
        <LearnMoreTooltip
          text="The Maximum Gas Amount of a transaction is the maximum amount of gas the sender is ready to pay for the transaction."
          link="https://docs.bitindi.com/"
        />
      );
    case "proposer":
      return <LearnMoreTooltipPlaceholder />;
    case "receiver":
      return <LearnMoreTooltipPlaceholder />;
    case "round":
      return (
        <LearnMoreTooltip
          text="A round consists of achieving consensus on a block of transactions and their execution results."
          link="https://docs.bitindi.com/"
        />
      );
    case "sender":
      return (
        <LearnMoreTooltip
          text="Sender is the address of the originator account for a transaction."
          link="https://docs.bitindi.com/"
        />
      );
    case "sequence_number":
      return (
        <LearnMoreTooltip
          text="The sequence number for an account indicates the number of transactions that have been submitted and committed on chain from that account."
          link="https://docs.bitindi.com/"
        />
      );
    case "signature":
      return <LearnMoreTooltipPlaceholder />;
    case "state_change_hash":
      return <LearnMoreTooltipPlaceholder />;
    case "status":
      return <LearnMoreTooltipPlaceholder />;
    case "timestamp":
      return (
        <LearnMoreTooltip text="Timestamp is the machine timestamp of when the block is committed." />
      );
    case "version":
      return (
        <LearnMoreTooltip
          text="A version is also called “height” in blockchain literature."
          link="https://docs.bitindi.com/"
        />
      );
    case "vm_status":
      return (
        <LearnMoreTooltip
          text="Learn more about VM"
          link="https://docs.bitindi.com/"
          linkToText
        />
      );
    default:
      return <LearnMoreTooltipPlaceholder />;
  }
}
