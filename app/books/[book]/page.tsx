export default function Page(props: { params: { book: string } }) {
  const {
    params: { book },
  } = props;
  return <div>Hello the book you chose was {book}</div>;
}
