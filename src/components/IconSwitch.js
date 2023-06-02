export default function IconSwitch({ icon, onSwitch }) {
  return (
    <i className="material-icons">
      <a href="#" className="switcher" onClick={() => onSwitch(icon)}>
        {icon}
      </a>
    </i>
  );
}