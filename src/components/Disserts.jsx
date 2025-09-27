import disserts from "../data.json";
import Dissert from "./Dissert";

export default function Disserts() {
  return <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:w-3/4 xl:grid-cols-3">
    {disserts.map(dissert => <Dissert key={dissert.id} dissert={dissert}/>)}
  </section>
}