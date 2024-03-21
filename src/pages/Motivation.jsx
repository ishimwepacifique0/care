export default function Motivation() {
  const response = {
    success: {
      total: 1,
    },
    contents: {
      quotes: [
        {
          id: "mLfP_RwMWrxsCnZpptWiHweF",
          quote:
            "Dare to BeWhen a new day begins, dare to smile gratefully. When there is darkness, dare to be the first to shine a light. When there is injustice, dare to be the first to condemn it. When something seems difficult, dare to do it anyway. When life seems to beat you down, dare to fight back. When there seems to be no hope, dare to find some. When you're feeling tired, dare to keep going. When times are tough, dare to be tougher. When love hurts you, dare to love again. When someone is hurting, dare to help them heal. When another is lost, dare to help them find the way. When a friend falls, dare to be the first to extend a hand. When you cross paths with another, dare to make them smile. When you feel great, dare to help someone else feel great too. When the day has ended, dare to feel as you've done your best. Dare to be the best you can. At all times, Dare to be!",
          length: 861,
          author: "Steve Maraboli",
          language: "en",
          tags: [
            "life",
            "success",
            "light",
            "inspire",
            "shine",
            "compassion",
            "smile",
            "gratitude",
            "feeling",
            "darkness",
            "cross",
            "lost",
            "feel",
            "day",
            "fight",
            "injustice",
            "hurting",
            "times",
            "friend",
            "find",
            "difficult",
            "heal",
            "tired",
            "hand",
            "dare",
            "great",
            "paths",
            "beat",
            "love",
            "hope",
          ],
          sfw: "sfw",
          permalink:
            "https://theysaidso.com/quote/steve-maraboli-dare-to-bewhen-a-new-day-begins-dare-to-smile-gratefullywhen-ther",
          title: "Inspiring Quote of the day",
          category: "inspire",
          background:
            "https://theysaidso.com/assets/images/qod/qod-inspire.jpg",
          date: "2023-12-11",
        },
      ],
    },
    copyright: {
      url: "https://quotes.rest",
      year: "2023",
    },
  };
  return (
    <section className="p-8 flex flex-col gap-6 text-justify">
      <p className="font-serif font-semibold text-2xl text-center">
        Inspiring Quote of the day
      </p>
      <img
        className="w-full h-40 object-cover"
        src={response.contents.quotes[0].background}
        alt=""
      />
      <p>{response.contents.quotes[0].quote}</p>
      <p className="font-serif font-bold text-xl text-dark-100">
        ~{response.contents.quotes[0].author}
      </p>
    </section>
  );
}
