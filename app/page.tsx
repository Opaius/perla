import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  CTA,
  SejurCraciun,
  SejurPaste,
  SejurRevelion,
  TabSize,
} from "@/components/ui/custom-elements";
import { ImagesSlider } from "@/components/ui/image-slider";
import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs-acet";
import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <section></section>
    </div>
  );
}
const SectionOne = () => {
  const images = [
    "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.dodotravel.ro%2Fcache%2F0%2F1%2F8%2F7%2F8%2F0187873ab1e774b9a79584c19aefd838a4ed6b23.jpeg&sp=1713854426T9ea1cd8f34160f58f0890fa0dbb62ae1f089a6c3c19567d436e9a4515e3a8644",
    "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.roturistic.ro%2Fimg%2Fuser%2FFrumosu_Perla_Brazilor%2FFrumosu_Perla_Brazilor_1509359458.92037892.jpg&sp=1713854426T1a3768a1b5a78778dbec65d11b3c334783f87b5d0d0be23ccc1ddeb4ee59574d",
  ];
  return (
    <section className="w-[100%] h-screen">
      <ImagesSlider
        overlayClassName="bg-gradient-to-b from-transparent to-background from-80% to-95%"
        images={images}
      >
        <div className="z-50 grid auto-rows-[auto_auto_auto] place-items-center h-full ">
          <h1 className=" font-extrabold text-3xl text-center mx-10 mt-[10rem] italic ">
            „Bucovina, un loc minunat unde să-ți petreci vacanța în liniște.”
          </h1>
          <CTA className="w-max self-start mt-10">Rezervă acum</CTA>
          <button className="self-end mb-5 italic font-extralight">
            Vezi ofertele noastre
          </button>
        </div>
      </ImagesSlider>
    </section>
  );
};
const SectionTwo = () => {
  const tabs = [
    {
      title: "Oferta Paste",
      value: "paste",
      content: (
        <div className="flex flex-col items-center gap-10">
          <TabSize>
            <Card className="md:justify-self-end w-[350px] xl:w-[450px] sm:w-[400px]">
              <CardHeader className="font-bold text-center text-2xl mt-5">
                Prețuri
              </CardHeader>
              <CardContent className="grid place-items-center md:h-[600px] h-[600px]">
                <div className="*:text-center *:drop-shadow-lg flex flex-col gap-10 items-center">
                  <h3>
                    5 nopţi (6 zile)
                    <br /> 2600 lei/persoana
                  </h3>
                  <Separator className="w-[70%]" />
                  <h3>
                    4 nopţi (5 zile) <br />
                    2200 lei/persoana
                  </h3>
                  <Separator className="w-[70%]" />
                  <h3>
                    3 nopţi (4 zile) <br />
                    1800 lei/persoana
                  </h3>
                  <Separator className="w-[70%]" />
                  <h4 className="text-xs text-pretty font-light px-10">
                    Oferim reduceri de 50% pentru copii pana in 12 ani, de 70%
                    pentru copii 5-3 ani gratuit 2-0 ani
                  </h4>
                </div>
              </CardContent>
            </Card>
            <Card className=" w-[350px] xl:w-[450px] sm:w-[400px]">
              <CardHeader className="font-bold text-center text-2xl mt-5">
                Program
              </CardHeader>
              <CardContent className="grid place-items-center md:h-[600px] h-[600px]">
                <div className="*:text-center *:drop-shadow-lg flex flex-col gap-10 items-center">
                  <span>
                    <h3 className="font-bold mb-10 text-lg">- 4 MAI -</h3>
                    <p className="text-sm font-light mx-5 text-left">
                      În jurul orei 11 program plimbare cu căruțele trase de
                      cai,in traseu vom organiza o demonstratie de incondeiat
                      ouale de unde veti putea si achizitiona,la intoarcere se
                      va face gratar in aer liber muzica si voia buna
                    </p>
                  </span>
                  <Separator className="w-[70%]" />
                  <span>
                    <h3 className="font-bold mb-10 text-lg">- 5 MAI -</h3>
                    <p className="text-sm font-light mx-5 text-right">
                      Masa festivă plină de bunătăți tradiționale,din care nu
                      vei ști ce să alegi,nu v-a lipsi friptura de
                      miel,pastravul afumat in ramuri de brad si multe altele
                    </p>
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="md:justify-self-start w-[350px] xl:w-[450px] sm:w-[400px]">
              <CardHeader className="font-bold text-center text-2xl mt-5">
                Alte detalii
              </CardHeader>
              <CardContent className="grid place-items-center md:h-[600px] h-[600px]">
                <div className="*:text-center *:drop-shadow-lg flex flex-col gap-10 items-center">
                  <p className="text-sm font-light mx-5 text-left">
                    Masa festivă plină de bunătăți tradiționale,din care nu vei
                    ști ce să alegi,nu v-a lipsi friptura de miel,pastravul
                    afumat in ramuri de brad si multe altele
                  </p>
                  <p className="text-sm font-light mx-5 text-right">
                    Masa festivă plină de bunătăți tradiționale,din care nu vei
                    ști ce să alegi,nu v-a lipsi friptura de miel,pastravul
                    afumat in ramuri de brad si multe altele
                  </p>
                  <p className="text-sm font-light mx-5 text-left">
                    Masa festivă plină de bunătăți tradiționale,din care nu vei
                    ști ce să alegi,nu v-a lipsi friptura de miel,pastravul
                    afumat in ramuri de brad si multe altele
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabSize>
          <div className="flex flex-col items-center gap-5">
            <CTA className="w-[70%] shadow-[0_0_50px_black]">Rezervă acum</CTA>
            <SejurPaste />
          </div>
        </div>
      ),
    },
    {
      title: "Oferta Craciun",
      value: "craciun",
      content: (
        <div className="flex flex-col items-center gap-10">
          <TabSize className="flex flex-col items-center gap-10">
            <Card className="md:justify-self-end w-[350px] xl:w-[450px] sm:w-[400px]">
              <CardHeader className="font-bold text-center text-2xl mt-5">
                Prețuri
              </CardHeader>
              <CardContent className="grid place-items-center md:h-[600px] h-[600px]">
                <div className="*:text-center *:drop-shadow-lg flex flex-col gap-10 items-center">
                  <h3 className="text-sm">
                    Te invităm într-o experiență unică cu totul inclusiv,
                    oferind acces la facilități deosebite precum piscina, sauna
                    și ciubarul cu apă sărată extrasă de la Cacica.
                  </h3>
                  <Separator className="bg-text w-[70%]" />
                  <span>
                    <h3>
                      4 nopți și 5 zile
                      <br /> la doar
                    </h3>
                    <h2 className="text-xl font-bold">2600 lei/persoana</h2>
                  </span>
                  <Separator className="bg-text w-[70%]" />
                  <h4 className="text-xs text-pretty font-light px-10">
                    Oferim reduceri de 50% pentru copii pana in 12 ani, de 70%
                    pentru copii 5-3 ani gratuit 2-0 ani
                  </h4>
                </div>
              </CardContent>
            </Card>
            <Card className=" w-[350px] xl:w-[450px] sm:w-[400px]">
              <CardHeader className="font-bold text-center text-2xl mt-5">
                Program
              </CardHeader>
              <CardContent className="grid place-items-center md:h-[600px] h-[600px]">
                <div className="*:text-center *:drop-shadow-lg flex flex-col gap-10 items-center">
                  <span>
                    <h3 className="font-bold mb-1 text-lg">- 23 DECEMBRIE -</h3>
                    <p className="text-sm font-light mx-5 text-left">
                      Bucură-te de o primire călduroasă, ca în Bucovina.
                    </p>
                  </span>
                  <span>
                    <h3 className="font-bold mb-1 text-lg">- 24 DECEMBRIE -</h3>
                    <p className="text-sm font-light mx-5 text-right">
                      La ora 10, bucură-te de o plimbare în sănile trase de cai
                      (căruțele depind de vreme), urmată de o masă delicioasă în
                      aer liber, cu pomană porcului, grătar, friptură la ciaun,
                      poale-n brâu și, desigur, un excelent vin fiert și țuică
                      fiartă. Seara la cina Colindători și Moș Crăciun vor aduce
                      magia sărbătorilor.
                    </p>
                  </span>
                  <span>
                    <h3 className="font-bold mb-1 text-lg">- 25 DECEMBRIE -</h3>
                    <p className="text-sm font-light mx-5 text-left">
                      Într-o atmosferă festivă, savurează bunătăți tradiționale
                      la masa specială de la ora 14.30 , acompaniată de
                      orchestră.
                    </p>
                  </span>
                  <span>
                    <h3 className="font-bold mb-1 text-lg">- 26 DECEMBRIE -</h3>
                    <p className="text-sm font-light mx-5 text-right">
                      Zi liberă pentru a explora împrejurimile sau a vă bucura
                      de liniștea din Bucovina.
                    </p>
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="md:justify-self-start w-[350px] xl:w-[450px] sm:w-[400px]">
              <CardHeader className="font-bold text-center text-2xl mt-5">
                Alte detalii
              </CardHeader>
              <CardContent className="grid place-items-center md:h-[600px] h-[600px]">
                <div className="*:text-center *:drop-shadow-lg flex flex-col gap-10 items-center">
                  <p className="text-sm font-light mx-5 text-left">
                    Beneficiază de băuturi alcoolice tradiționale precum vin,
                    țuică, afinată, vișinată, murături, bere la halbă, băuturi
                    răcoritoare, apă plată și minerală.
                  </p>
                  <p className="text-sm font-light mx-5 text-right">
                    Servim mesele la bufet, cu excepția celei festive, care va
                    fi servită.
                  </p>
                  <p className="text-sm font-light mx-5 text-left">
                    Mâncarea, preparată în proporție de 80% din producția
                    noastră proprie, te va încânta.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabSize>
          <div className="flex flex-col items-center gap-5 ">
            <CTA className="w-[70%] shadow-[0_0_50px_black]">Rezervă acum</CTA>
            <SejurCraciun />
          </div>
        </div>
      ),
    },
    {
      title: "Oferta Revelion",
      value: "revelion",
      content: (
        <div className="flex flex-col items-center gap-10">
          <TabSize>
            <Card className="md:justify-self-end w-[350px] xl:w-[450px] sm:w-[400px]">
              <CardHeader className="font-bold text-center text-2xl mt-5">
                Prețuri
              </CardHeader>
              <CardContent className="grid place-items-center md:h-[600px] h-[600px]">
                <div className="*:text-center *:drop-shadow-lg flex flex-col gap-10 items-center">
                  <h3 className="text-sm">
                    Te invităm într-o experiență unică cu totul inclusiv,
                    oferind acces la facilități deosebite precum piscina, sauna
                    și ciubarul cu apă sărată extrasă de la Cacica.
                  </h3>
                  <Separator className="bg-text w-[70%]" />
                  <span>
                    <h3>
                      4 nopți și 5 zile
                      <br /> la doar
                    </h3>
                    <h2 className="text-xl font-bold">3000 lei/persoana</h2>
                  </span>
                  <Separator className="bg-text w-[70%]" />
                  <h4 className="text-xs text-pretty font-light px-10">
                    Oferim reduceri de 50% pentru copii pana in 12 ani, de 70%
                    pentru copii 5-3 ani gratuit 2-0 ani
                  </h4>
                </div>
              </CardContent>
            </Card>
            <Card className=" w-[350px] xl:w-[450px] sm:w-[400px]">
              <CardHeader className="font-bold text-center text-2xl mt-5">
                Program
              </CardHeader>
              <CardContent className="grid place-items-center md:h-[600px] h-[600px]">
                <div className="*:text-center *:drop-shadow-lg flex flex-col gap-5  items-center">
                  <span>
                    <h3 className="font-bold mb-1 text-lg">- 29 DECEMBRIE -</h3>
                    <p className="text-sm font-light mx-5 text-left">
                      Intâmpinarea oaspeților ca in Bucovina.
                    </p>
                  </span>
                  <span>
                    <h3 className="font-bold mb-1 text-lg">- 30 DECEMBRIE -</h3>
                    <p className="text-sm font-light mx-5 text-right">
                      În jurul orei 10 program plimbare în sãnii (cãrute depinde
                      de vreme) trase de cai la intoarcere se va face pomana
                      porcului în mod tradițional, acompaniați de vin fiert
                      țuică fiartă , șoric ,grătar, poale-n brâu muzica și voie
                      bună
                    </p>
                  </span>
                  <span>
                    <h3 className="font-bold mb-1 text-lg">- 31 DECEMBRIE -</h3>
                    <p className="text-sm font-light mx-5 text-left">
                      După prânz se va desfășura programul datinelor de anul nou
                      ca în Bucovina, cu uratori, capre, ursi, bumbieri,
                      haramnice etc..
                    </p>
                  </span>
                  <span>
                    <h3 className="font-bold mb-1 text-lg">- ORA 21:00 -</h3>
                    <p className="text-sm font-light mx-5 text-right">
                      Masa festivă de REVELION Mâncăruri tradiționale ,totul
                      organizat într-un mod original cu orchestră
                    </p>
                  </span>
                  <span>
                    <h3 className="font-bold mb-1 text-lg">- 1 IANUARIE -</h3>
                    <p className="text-sm font-light mx-5 text-right">
                      Zi liberă.
                    </p>
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="md:justify-self-start w-[350px] xl:w-[450px] sm:w-[400px]">
              <CardHeader className="font-bold text-center text-2xl mt-5">
                Alte detalii
              </CardHeader>
              <CardContent className="grid place-items-center md:h-[600px] h-[600px]">
                <div className="flex flex-col *: drop-shadow-lg gap-10 items-center">
                  <p className="text-sm font-light mx-5 text-left">
                    Masa festivă include aperitive reci , piftie de curcan
                    ,salata de biof ,pifteluțe marinate, pește , aperitiv cald
                    și friptură de curcan , purcel, vitel ,garnituri etc.
                  </p>
                  <p className="text-sm font-light mx-5 text-right">
                    Se vor servi băuturi alcolice tradiționale, vin,țuica,
                    afinată, smeurată, bere la halba Suceava, bauturi
                    racoritoare, apa plata si minerala.
                  </p>
                  <p className="text-sm font-light mx-5 text-left">
                    Mesele se vor servi la bufet inafara de masa festiva care va
                    fi servită.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabSize>

          <div className="flex flex-col items-center gap-5 ">
            <CTA className="w-[70%] shadow-[0_0_50px_black]">Rezervă acum</CTA>
            <SejurRevelion />
          </div>
        </div>
      ),
    },
  ];
  return (
    <section className="h-[calc(800px*3+460px)] md:h-[calc(750px*2+400px)] xl:h-[calc(750px+400px)] overflow-hidden">
      <Tabs tabs={tabs} />
    </section>
  );
};
