type ContentProps = {
  text: string;
};

export default function Content(
  props: ContentProps
) {
  return (
    <section>
      <p>{props.text}</p>
    </section>
  );
}