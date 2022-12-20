import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Alex", text: "Learning React is great!" },
  { id: "q2", author: "Mike", text: "Learning React is hard.." },
  { id: "q3", author: "Maria", text: "Learning React is not hard at all!" },
];
const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
