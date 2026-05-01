export default function Button({ className, text, icon, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <span>{text}</span>
      <span>{icon}</span>
    </button>
  );
}