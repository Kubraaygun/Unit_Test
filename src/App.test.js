// App bileseninin testlerinin yazildigi test dosyasidir
//bir dosyanin test dosyasi oldugunu anlamamiz icin dosya uzantısının
// ...test.js / .test.jsx seklinde olmali

//unit Test
//Yazılımın en küçük parçası görevini doğru şekilde yerine getiriyor mu
// kontrolunu yapma.

import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("ekrana react ogren yaz", () => {
  render(<App />);

  // test edilecek elementleri cagir
  const LinkEle = screen.getByText("React Öğren");
  //cagrilan elemandan beklentiyi belirt
  expect(LinkEle).toBeInTheDocument();
});

//
test("Button tiklanma olayinda renk ve yazi degistirir", () => {
  //test edilecek bilesen ekrana basilir
  render(<App />);

  //test edilecek butonu cagir

  const button = screen.getByRole("button");
  //1-buton rengi kirmizidir
  expect(button).toHaveStyle({ background: "red" });

  //2-butonun icinde "Maviye cevir" yazar

  expect(button).toHaveTextContent("Maviye Çevir");

  //3-Butonun uzerine tiklanir

  fireEvent.click(button);

  //4-Butonun rengi mavidir

  expect(button).toHaveStyle({background:"aqua"})

  //5-Butonun icinde "kirmiziya cevir" yazar

  expect(button).toHaveTextContent('Kırmızıya Çevir')
});
