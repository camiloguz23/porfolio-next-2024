import styles from "./footer.module.css";

export const UiFooter = (): JSX.Element => (
  <footer className={`rounded-lg shadow m-4 ${styles.footer}`}>
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm sm:text-center">
        © 2024{" "}
        <a href="https://www.jeysonguzman.online/" className="hover:underline">
          Jeyson Camilo Guzman Rico
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
);
