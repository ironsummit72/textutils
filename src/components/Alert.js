export default function Alert(props) {
  return (
    props.message && (
      <>
        <div class={`alert alert-${props.type.type}`} role="alert">
          <strong> {props.message.message}</strong>
        </div>
      </>
    )
  );
}
