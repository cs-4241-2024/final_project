import { Form, useLoaderData} from "react-router-dom";

export async function loader({params}) {
  const res = await fetch('/game/get/' + params.id, {
        method:'GET'
      })
  const game = await res.json();
  return {game};
}

export default function Game() {
  const { game } = useLoaderData();
  // existing code
}