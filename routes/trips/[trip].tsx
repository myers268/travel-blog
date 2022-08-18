/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet({ params }: PageProps) {
  return (
    <div>
      <h1>Trip to {params.trip}</h1>
      <section>
        <aside>Mermaid caves</aside>
        <aside>
          <img src="/mermaid-caves-1.jpeg" />
        </aside>
      </section>
      <section>
        Blah blah blah
      </section>
      <section>
        <aside>Mermaid caves</aside>
        <aside>
          <img src="/mermaid-caves-2.jpeg" />
        </aside>
      </section>
    </div>
  );
}
