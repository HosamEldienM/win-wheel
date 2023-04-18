export const Button = (props) => {
    return (
      <button
        type={props.type || "button"}
        className={`${props.width} font-poppins  text-2xl bg-green-800 hover:bg-green-900 text-white font-bold py-4 px-4 mt-6 rounded-full`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
}