import { Dialog, DialogContent, DialogTrigger } from "@/components/dialog";
import { ImagesSlider } from "@/components/image-slider";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { SejurCraciun, SejurPaste } from "@/components/sejur-calc";
import { Separator } from "@/components/separator";
import {
  CustomButton,
  H2,
  H3,
  H4,
  OfertaCard,
  TextThin,
  Text,
  CTAButton,
} from "@/components/styled-components";
import { Tabs } from "@/components/tabs";
import { FBReview } from "@/utils/types";
import { Suspense } from "react";
import { FaFacebook } from "react-icons/fa";

async function getFbRating() {
  const res = await fetch(
    "https://graph.facebook.com/v19.0/174292882662667/ratings?fields=open_graph_story&limit=10&access_token=EAAzDz2n70voBOwQ1yu3Tg6A9Bxe9hNbDeSjUk3wGUfJuNkv8azRmBa3rdnwNfKXhbUuyZC4RztzRP0RZA3zEkMxRDcKtqWDAXqjRaZCSjpBtCtZAj4c68FJZCwHTpxAFZBbGOmXIR33TZCBRdcp7ggNycJBQ2HYNlPJfBms8vSwBWD2gwJZAFSpgKhDCuZBH8Lbtd4uZBSV7P1q90JgNgCkIvUMIgZD"
  );
  if (!res.ok) {
    throw new Error(`Error : ${res.status} : ${res.statusText}`);
  }
  return res.json();
}
export default async function Home() {
  const images = [
    "/perla-slider-1.jpg",
    "/perla-slider-2.jpg",
    "/perla-slider-3.jpg",
  ];
  const tabs = [
    {
      title: "Oferta Paște",
      value: "paste",
      content: (
        <article
          id="paste"
          className="bg-foreground border-[1px] border-text rounded-3xl pb-4 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 items-center"
        >
          <H2 className="md:col-span-2 lg:col-span-3">
            Oferta Paște în Bucovina 2024
          </H2>
          <OfertaCard>
            <H3>Prețuri</H3>
            <H4>
              5 nopţi (6 zile) <br /> 2600 lei/persoana
            </H4>
            <Separator />
            <H4>
              4 nopţi (5 zile) <br />
              2200 lei/persoana
            </H4>
            <Separator />
            <H4>
              3 nopţi (4 zile) <br />
              1800 lei/persoana
            </H4>
            <Separator />
            <TextThin>
              Prețurile includ : accesul la piscină, saună, ciubăr cu apă
              sărata, cameră cu sare, adusă de la Mina de sare Cacica și alte
              programe notate.
            </TextThin>
            <TextThin>
              Acordăm reduceri speciale: 50% pentru copii până în 12 ani, 70%
              pentru cei cu vârsta între 6 și 4 ani, iar cei între 3 și 0 ani
              beneficiază de gratuitate.
            </TextThin>
            <Dialog>
              <DialogTrigger asChild>
                <CTAButton>Calculează-ți sejurul !</CTAButton>
              </DialogTrigger>
              <DialogContent className="max-w-[50rem]">
                <H3>Calculează cât costă un sejur la noi !</H3>
                <SejurPaste />
              </DialogContent>
            </Dialog>
          </OfertaCard>
          <OfertaCard className="justify-between  ">
            <H3>Program</H3>
            <div>
              <H4 className="underline underline-offset-2">4 Mai</H4>
              <Text>
                În jurul orei 11 va avea loc o plimbare cu căruțele trase de
                cai. Pe parcursul traseului vom organiza o demonstrație de
                încondeiere a ouălor, de unde veți putea și achiziționa. La
                întoarcere, se va face un grătar în aer liber, cu muzică și voie
                bună.
              </Text>
            </div>
            <Separator />
            <div>
              <H4 className="underline underline-offset-2">5 Mai</H4>
              <Text>
                Masa festivă va fi plină de bunătăți tradiționale, dintre care
                nu vei ști ce să alegi. Nu va lipsi friptura de miel, pastravul
                afumat în ramuri de brad și multe altele.
              </Text>
            </div>
          </OfertaCard>
          <OfertaCard className="md:col-span-2 lg:col-auto justify-center">
            <H3>Detalii</H3>
            <Text>
              Se vor servi băuturi alcoolice tradiționale: vin de Odobești,
              țuică de Zalău, afinată, vișinată, murată, bere la halbă Suceava,
              băuturi răcoritoare, sucuri naturale, apă plată și minerală.
              Mesele se vor servi la bufet, cu excepția mesei festive care va fi
              servită la masă. Mâncarea este preparată în proporție de 80% din
              producție proprie.
            </Text>
          </OfertaCard>
          <CTAButton className="self-center justify-self-center md:col-span-2 lg:col-span-3 lg:w-max mx-5">
            Rezervă acum !
          </CTAButton>
        </article>
      ),
    },
    {
      title: "Oferta Crăciun",
      value: "craciun",
      content: (
        <article
          id="craciun"
          className="bg-foreground border-[1px] border-text rounded-3xl pb-4 flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-3 items-center"
        >
          <H2 className="md:col-span-2 2xl:col-span-3 ">
            Ofertă Pachet Crăciun în Bucovina
          </H2>
          <OfertaCard className=" justify-between">
            <H3>Prețuri</H3>
            <H4>
              Te invităm într-o experiență unică cu totul inclusiv, oferind
              acces la facilități deosebite precum piscina, sauna și ciubarul cu
              apă sărată (extrasă de la Cacica).
            </H4>
            <Separator />
            <H3>4 nopți și 5 zile, la doar 2600 lei/persoană </H3>
            <Separator />

            <TextThin>
              Acordăm reduceri speciale: 50% pentru copii până în 12 ani, 70%
              pentru cei cu vârsta între 6 și 4 ani, iar cei între 3 și 0 ani
              beneficiază de gratuitate. ​
            </TextThin>
            <Dialog>
              <DialogTrigger asChild>
                <CTAButton>Calculează-ți sejurul !</CTAButton>
              </DialogTrigger>
              <DialogContent className="max-w-[50rem]">
                <H3>Calculează cât costă un sejur la noi !</H3>
                <SejurCraciun />
              </DialogContent>
            </Dialog>
          </OfertaCard>
          <OfertaCard className="md:col-span-2 md:grid md:grid-cols-2 2xl:col-auto ">
            <H3 className="md:col-span-2">Program</H3>
            <div>
              <H4 className="underline underline-offset-2">23 decembrie</H4>
              <Text>Bucură-te de o primire călduroasă, ca în Bucovina.</Text>
              <Separator />
            </div>
            <div>
              <H4 className="underline underline-offset-2">24 decembrie</H4>
              <Text>
                La ora 10, bucură-te de o plimbare în sănile trase de cai
                (căruțele depind de vreme), urmată de o masă delicioasă în aer
                liber, cu pomană porcului, grătar, friptură la ciaun, poale-n
                brâu și, desigur, un excelent vin fiert și țuică fiartă. Seara
                la cina Colindători și Moș Crăciun vor aduce magia sărbătorilor.
              </Text>
              <Separator />
            </div>

            <div>
              <H4 className="underline underline-offset-2">25 decembrie</H4>
              <Text>
                Într-o atmosferă festivă, savurează bunătăți tradiționale la
                masa specială de la ora 14.30 , acompaniată de orchestră
              </Text>
              <Separator />
            </div>

            <div>
              <H4 className="underline underline-offset-2">26 decembrie</H4>
              <Text>
                Ai opțiunea de a-ți petrece ziua liber, fie practicând schiul,
                fie vizitând mănăstirile Moldovița, Sucevița, Voroneț sau
                Mănăstirea Humorului, sau chiar experimentând o plimbare cu
                Mocanița (hutulca) de la Moldovița.
              </Text>
            </div>
          </OfertaCard>
          <OfertaCard className="md:col-[2/3] md:row-[2/3] 2xl:col-auto 2xl:row-auto justify-center h-max">
            <H3>Detalii</H3>
            <Text>
              Beneficiază de băuturi alcoolice tradiționale precum vin, țuică,
              afinată, vișinată, murături, bere la halbă, băuturi răcoritoare,
              apă plată și minerală. Servim mesele la bufet, cu excepția celei
              festive, care va fi servită. Mâncarea, preparată în proporție de
              80% din producția noastră proprie, te va încânta.
            </Text>
          </OfertaCard>

          <CTAButton className="self-center justify-self-center md:col-span-2 lg:w-max mx-5 2xl:col-span-3">
            Rezervă acum !
          </CTAButton>
        </article>
      ),
    },
    {
      title: "Oferta Revelion",
      value: "revelion",
      content: (
        <article
          id="revelion"
          className="bg-foreground border-[1px] border-text rounded-3xl pb-4 flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-3 items-center"
        >
          <H2 className="md:col-span-2 2xl:col-span-3 ">
            Ofertă Pachet Crăciun în Bucovina
          </H2>
          <OfertaCard className=" justify-between">
            <H3>Prețuri</H3>
            <H4>
              Te invităm într-o experiență unică cu totul inclusiv, oferind
              acces la facilități deosebite precum piscina, sauna și ciubarul cu
              apă sărată (extrasă de la Cacica).
            </H4>
            <Separator />
            <H3>4 nopți și 5 zile, la doar 2600 lei/persoană </H3>
            <Separator />

            <TextThin>
              Acordăm reduceri speciale: 50% pentru copii până în 12 ani, 70%
              pentru cei cu vârsta între 6 și 4 ani, iar cei între 3 și 0 ani
              beneficiază de gratuitate. ​
            </TextThin>
            <Dialog>
              <DialogTrigger asChild>
                <CTAButton>Calculează-ți sejurul !</CTAButton>
              </DialogTrigger>
              <DialogContent className="max-w-[50rem]">
                <H3>Calculează cât costă un sejur la noi !</H3>
                <SejurCraciun />
              </DialogContent>
            </Dialog>
          </OfertaCard>
          <OfertaCard className="md:col-span-2 md:grid md:grid-cols-2 2xl:col-auto ">
            <H3 className="md:col-span-2">Program</H3>
            <div>
              <H4 className="underline underline-offset-2">23 decembrie</H4>
              <Text>Bucură-te de o primire călduroasă, ca în Bucovina.</Text>
              <Separator />
            </div>
            <div>
              <H4 className="underline underline-offset-2">24 decembrie</H4>
              <Text>
                La ora 10, bucură-te de o plimbare în sănile trase de cai
                (căruțele depind de vreme), urmată de o masă delicioasă în aer
                liber, cu pomană porcului, grătar, friptură la ciaun, poale-n
                brâu și, desigur, un excelent vin fiert și țuică fiartă. Seara
                la cina Colindători și Moș Crăciun vor aduce magia sărbătorilor.
              </Text>
              <Separator />
            </div>

            <div>
              <H4 className="underline underline-offset-2">25 decembrie</H4>
              <Text>
                Într-o atmosferă festivă, savurează bunătăți tradiționale la
                masa specială de la ora 14.30 , acompaniată de orchestră
              </Text>
              <Separator />
            </div>

            <div>
              <H4 className="underline underline-offset-2">26 decembrie</H4>
              <Text>
                Ai opțiunea de a-ți petrece ziua liber, fie practicând schiul,
                fie vizitând mănăstirile Moldovița, Sucevița, Voroneț sau
                Mănăstirea Humorului, sau chiar experimentând o plimbare cu
                Mocanița (hutulca) de la Moldovița.
              </Text>
            </div>
          </OfertaCard>
          <OfertaCard className="md:col-[2/3] md:row-[2/3] 2xl:col-auto 2xl:row-auto justify-center h-max">
            <H3>Detalii</H3>
            <Text>
              Beneficiază de băuturi alcoolice tradiționale precum vin, țuică,
              afinată, vișinată, murături, bere la halbă, băuturi răcoritoare,
              apă plată și minerală. Servim mesele la bufet, cu excepția celei
              festive, care va fi servită. Mâncarea, preparată în proporție de
              80% din producția noastră proprie, te va încânta.
            </Text>
          </OfertaCard>

          <CTAButton className="self-center justify-self-center md:col-span-2 lg:w-max mx-5 2xl:col-span-3">
            Rezervă acum !
          </CTAButton>
        </article>
      ),
    },
  ];
  const fbReviews = (await getFbRating()) as FBReview;
  const cards = fbReviews.data.map((elm) => ({
    quote: elm.open_graph_story.message,
    id: elm.open_graph_story.id,
    logo: <FaFacebook />,
  }));
  return (
    <div className="flex flex-col gap-[5rem]">
      <section className="h-screen">
        <ImagesSlider
          images={images}
          overlayClassName="bg-gradient-to-b from-transparent to-background from-70% pointer-events-none z-10"
        >
          <CustomButton className="z-20" href="#oferte">
            REZERVĂ ACUM
          </CustomButton>
        </ImagesSlider>
      </section>
      <section id="oferte" className="mx-2 md:mx-10 flex flex-col gap-10 my-10">
        <div className="flex justify-around">
          {tabs.map((tab) => (
            <CustomButton className="xl:text-md" href={`#${tab.value}`}>
              {tab.title}
            </CustomButton>
          ))}
        </div>
        {tabs.map((tab) => tab.content)}
      </section>
      <Suspense fallback={<div>Loading</div>}>
        <section className="h-full flex justify-center items-center">
          <InfiniteMovingCards
            items={cards}
            speed="slow"
            pauseOnHover
            className="w-screen"
          ></InfiniteMovingCards>
        </section>
      </Suspense>
    </div>
  );
}
