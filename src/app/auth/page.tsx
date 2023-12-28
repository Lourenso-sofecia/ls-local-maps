import Image from "next/image";

import loginImg from "@/assets/Login.png";

import shopping from "@/assets/shopping.png";
import local_hospital from "@/assets/local_hospital.png";
import restaurant_black from "@/assets/restaurant_black.png";
import pets_black from "@/assets/pets_black.png";
import local_gas_station from "@/assets/local_gas_station.png";

import shopping_basket_black from "@/assets/shopping_basket_black.png";

export default function auth() {
  const categoryList = [
    { id: 1, name: "Mercado", icon: shopping },
    { id: 2, name: "Fármacia", icon: local_hospital },
    { id: 3, name: "Restaurante", icon: restaurant_black },
    { id: 4, name: "Pet Shop", icon: pets_black },
    { id: 5, name: "Combustível", icon: local_gas_station },
    { id: 6, name: "Vestuário", icon: shopping_basket_black },
  ];

  return (
    <main className="flex flex-col min-h-screen items-center  sm:p-10 p-4  bg-gray-100">
      <section className="flex flex-col lg:w-[730px] w-full  sm:gap-10 gap-4 sm:p-10 p-4 b  bg-white rounded-xl">
        <h1 className="text-indigo-950 sm:text-4xl text-2xl font-bold font-['Roboto'] leading-[46px]">
          Cadastro do comércio local
        </h1>
        <article className="flex flex-col gap-10">
          <h3 className="text-indigo-950 sm:text-2xl text-xl font-bold font-['Roboto']">
            Dados
          </h3>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 text-sm font-normal font-['Roboto']">
                Nome do Local
              </p>
              <input
                className="w-full p-4 bg-gray-100 rounded-lg"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 text-sm font-normal font-['Roboto']">
                Descrição
              </p>
              <input
                className="w-full p-4 bg-gray-100 rounded-lg"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 text-sm font-normal font-['Roboto']">
                Contato
              </p>
              <input
                className="w-full lg:w-[50%] p-4 bg-gray-100 rounded-lg"
                type="text"
                placeholder="()"
              />
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <h3 className="text-indigo-950 sm:text-2xl text-xl font-bold font-['Roboto']">
              Endereço
            </h3>
            <p className="text-gray-500 text-sm font-normal font-['Roboto']">
              Selecione o endereço no mapa
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              //   width="600"
              // height="450"
              className="border-0 w-full lg:h-[350px] h-[275px] rounded-[20px]"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </article>

        <article className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <h3 className="text-indigo-950 sm:text-2xl text-xl font-bold font-['Roboto']">
              Categoria
            </h3>
            <p className=" mr-20 text-gray-500 text-sm font-normal font-['Roboto']">
              Selecione um item
            </p>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
            {categoryList.map((item: any) => {
              return (
                <div
                  key={item?.id}
                  className="w-full hover:opacity-60 cursor-pointer py-10 px-4 flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-lg"
                >
                  <Image
                    className="w-[55px] h-[55px]"
                    src={item?.icon}
                    alt=""
                    width={55}
                    height={55}
                  />
                  <h4 className="text-center text-indigo-950 text-base font-normal font-['Roboto'] leading-tight">
                    {item?.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </article>
        <article className="flex justify-end gap-10 sm:py-0 py-10">
          <button className="sm:w-[266px] w-full h-14 bg-indigo-950 hover:bg-indigo-900 hover:opacity-80 rounded-lg">
            <p className="text-center text-white text-base font-bold font-['Roboto']">
              Cadastrar comércio local
            </p>
          </button>
        </article>
      </section>
    </main>
  );
}
