import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <div className="flex justify-between items-center gap-6 px-4 py-8">
      <div className="w-1/3">
        <Carousel className="rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full rounded-xl object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full rounded-xl object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full rounded-xl object-cover"
          />
        </Carousel>
      </div>
      <div className="w-2/3">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-lg font-semibold mb-4">
          Welcome to Crystal Sands
          </p>
          <p className="text-sm leading-relaxed">
            Crystal Sands is an All-Suite five-star hotel on the Southern Coast
            of Sri Lanka, consisting of 24 suites that offer guests a distinctive
            blend of a villa experience coupled with boutique hotel luxuries. This
            unique experience makes Crystal Sands the ideal holiday home for
            families and friends traveling together.
          </p>
          <p className="text-sm leading-relaxed mt-4">
            The accommodation at Crystal Sands presents a choice of 15 two-bedroomed
            suites, 8 three-bedroomed suites, and 1 palatial four-bedroomed
            presidential suite that takes up the entire 9th floor. Every one of the
            suites at Crystal Sands comes with its very own private plunge pool, indoor
            & outdoor living space, and unmatched views of the ocean.
          </p>
          <p className="text-sm leading-relaxed mt-4">
            At Crystal Sands, our guests will also have direct beach access, a rooftop
            infinity pool, restaurant & bar, a lawn with sunbeds, in-suite dining, access
            to our fitness center, Balinese Ayu spa, and concierge service.
          </p>
        </div>
      </div>
    </div>
  );
}

