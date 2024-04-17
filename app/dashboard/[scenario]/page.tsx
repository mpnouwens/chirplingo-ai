export default function Page({ params }: { params: { scenario: string } }) {
  const decodedText = decodeURIComponent(params.scenario);

  return <div>My Post: {decodedText}</div>
}