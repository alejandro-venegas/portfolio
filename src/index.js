import "./styles/main.scss";
const paths = document.querySelectorAll("#logo path");
for (const path of paths) {
  console.log(
    path.getTotalLength() *
      (path.getBBox().width / path.getBoundingClientRect().width)
  );
}
