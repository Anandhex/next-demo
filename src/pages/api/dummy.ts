import type { NextApiRequest, NextApiResponse } from "next";

export const data = [
  {
    id: "1",
    header: "Bacon Ipsum Meat Lovers",
    body: "Bacon ipsum dolor amet alcatra short ribs corned beef sirloin fatback short loin, turkey pork belly shank tongue tri-tip filet mignon flank. Chuck biltong kielbasa, tongue short loin chislic pork loin beef ribs shankle turducken. Frankfurter pastrami chicken, venison jowl brisket shoulder leberkas biltong prosciutto alcatra ham hock tri-tip tenderloin. Strip steak sausage ribeye cupim biltong shank shoulder turkey. Biltong tri-tip strip steak spare ribs t-bone chislic kevin.",
    link: "https://www.google.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "2",
    header: "Pork Loin and Beef Delights",
    body: "Pork loin strip steak tongue, beef ham hock alcatra cupim short loin ham turducken ball tip. Doner venison short ribs sausage. Buffalo meatball biltong, venison shank fatback shankle capicola corned beef beef porchetta meatloaf. Jerky venison cow ribeye, ground round turducken corned beef doner pork bacon bresaola sirloin hamburger biltong. Drumstick cupim kielbasa biltong, rump tri-tip bresaola shank filet mignon beef ribs. Corned beef pig cow ribeye shoulder filet mignon ham pastrami pancetta capicola tongue boudin.",
    link: "https://www.youtube.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "3",
    header: "Grilled Ribeye and Andouille",
    body: "Tri-tip ribeye andouille, cow sausage porchetta turducken. Kevin tri-tip pork belly, corned beef pork ball tip alcatra filet mignon. Frankfurter alcatra short ribs kielbasa burgdoggen cupim. Sirloin fatback picanha leberkas, shoulder turducken bresaola ribeye short loin capicola venison salami.",
    link: "https://www.facebook.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "4",
    header: "Swine Spare Ribs and Venison",
    body: "Swine spare ribs venison ground round brisket, turkey sausage picanha tri-tip meatloaf t-bone andouille. Tenderloin andouille pork loin fatback, chuck alcatra swine tail porchetta. Kielbasa hamburger frankfurter sausage pork chop. Beef prosciutto corned beef drumstick tri-tip, sirloin fatback chuck tail shankle pork loin. Frankfurter doner capicola pig, ball tip burgdoggen short ribs ham hock.",
    link: "https://www.twitter.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "5",
    header: "Salami and Pastrami Feast",
    body: "Salami prosciutto chuck ham rump, beef beef ribs cupim short loin porchetta short ribs pig filet mignon. Corned beef sirloin pastrami turducken pork belly capicola doner ground round ham hock t-bone beef. Corned beef doner short ribs, fatback salami beef ribs kevin bresaola shank beef cow turkey ground round jowl. Salami hamburger alcatra, boudin meatloaf drumstick tongue tenderloin. Chislic short ribs doner, pork belly corned beef beef tenderloin meatball filet mignon jowl chicken rump. Biltong corned beef drumstick t-bone shoulder ground round rump boudin alcatra. Biltong andouille cow beef ribs burgdoggen boudin chicken.",
    link: "https://www.google.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "6",
    header: "Short Loin and Sausage Heaven",
    body: "Short loin tongue meatball beef pork corned beef hamburger buffalo andouille bresaola ribeye ham hock sausage pastrami ground round. Pork belly ham beef ribs kevin short ribs, strip steak kielbasa. Capicola hamburger corned beef beef meatloaf boudin tail rump andouille. Meatball ball tip beef pig filet mignon pancetta. Spare ribs ground round corned beef kevin porchetta. Sausage cow capicola beef ribs pig ham hock.",
    link: "https://www.youtube.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "7",
    header: "Beef Brisket and Pork Belly",
    body: "Pork beef ribs tenderloin, beef bresaola cow kielbasa. Swine ham strip steak, kevin capicola buffalo porchetta leberkas brisket corned beef turkey fatback burgdoggen tail alcatra. Rump tri-tip fatback pastrami strip steak doner meatball alcatra. Cow sausage ground round filet mignon bacon, kevin strip steak capicola ham prosciutto turkey biltong pig alcatra fatback. Filet mignon brisket spare ribs tail ball tip capicola bresaola pork ham fatback hamburger kielbasa jerky. Pig biltong drumstick rump frankfurter swine tongue kielbasa pork belly sirloin cupim.",
    link: "https://www.facebook.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "8",
    header: "Kevin's Favorite Meats",
    body: "Kevin tongue short loin short ribs ham hock sausage drumstick prosciutto kielbasa bresaola t-bone. Tenderloin prosciutto chuck doner, ribeye cupim jowl andouille t-bone jerky. Pork ham hock short loin bacon bresaola cow brisket tongue jowl capicola venison pancetta shank meatloaf. Pork chop ball tip pancetta sirloin venison kielbasa shoulder burgdoggen buffalo. Drumstick short ribs salami bresaola corned beef pastrami tri-tip sausage. Tail beef strip steak, cow prosciutto beef ribs tongue short ribs.",
    link: "https://www.twitter.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "9",
    header: "Porchetta and Ball Tip Specials",
    body: "Porchetta tenderloin shoulder chicken, ball tip corned beef tongue meatloaf shankle ham fatback pork belly bacon salami. Meatball pork chop jowl beef ribeye t-bone brisket prosciutto andouille bacon. Swine fatback tongue doner alcatra. Ham beef boudin, drumstick t-bone rump alcatra. Brisket ball tip spare ribs, pig biltong turducken turkey pork. Shankle landjaeger spare ribs pancetta, tri-tip cupim capicola chislic sausage. Strip steak pork chop beef ribs brisket tri-tip bacon prosciutto pork loin pancetta ball tip cow rump.",
    link: "https://www.google.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "10",
    header: "Shank and Capicola Selections",
    body: "Shank capicola beef, flank boudin porchetta andouille. Pastrami hamburger shoulder bacon chuck prosciutto, ground round pancetta sausage ham hock boudin. Shoulder sirloin capicola beef ribs, prosciutto pork belly picanha jerky turkey corned beef beef chislic. Short ribs sausage swine shankle, turducken hamburger beef ribs. Meatball picanha kielbasa spare ribs tenderloin. Meatball ham boudin tail, doner jerky strip steak ribeye pork belly shankle salami cow short ribs. Bresaola pork belly bacon tail pork loin chislic drumstick ribeye.",
    link: "https://www.youtube.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "11",
    header: "Bacon and Beef Delights",
    body: "Bacon ipsum dolor amet capicola tenderloin pork fatback. Shoulder beef ribs pork loin, shankle tail swine chicken t-bone ground round landjaeger bacon brisket buffalo shank short ribs. T-bone chicken tri-tip short loin bresaola andouille chuck porchetta cow. Strip steak boudin leberkas chislic capicola chuck tri-tip swine biltong filet mignon picanha spare ribs buffalo sirloin. Ham tongue shank turkey capicola doner. Venison landjaeger doner boudin, tail flank beef. Landjaeger biltong drumstick, burgdoggen ball tip pork loin pork chop pig tenderloin filet mignon leberkas boudin.",
    link: "https://www.facebook.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "12",
    header: "Ham Hock and Andouille Special",
    body: "Ham hock andouille ham leberkas, drumstick hamburger picanha pork loin. Hamburger ham hock tenderloin, pancetta beef salami ground round pork swine flank ribeye. Frankfurter kevin hamburger, short ribs shank buffalo pig. Tail ham jowl spare ribs hamburger corned beef capicola boudin tongue beef ribs tri-tip andouille chislic shankle chuck.",
    link: "https://www.twitter.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "13",
    header: "Tri-tip and Prosciutto",
    body: "Tri-tip prosciutto kielbasa meatball bresaola tongue jerky biltong chislic. Turkey picanha meatloaf, kevin hamburger sirloin tenderloin porchetta shank boudin brisket salami. Leberkas rump meatball filet mignon shankle shoulder. Strip steak tail meatball, andouille short loin chicken meatloaf sausage ground round corned beef jowl alcatra. Cow biltong drumstick leberkas, beef ribs tenderloin boudin venison jowl pork chop fatback short loin. Venison rump pig filet mignon tail biltong jowl andouille cupim shankle buffalo alcatra ball tip ham t-bone. Turkey pastrami swine tri-tip pig shankle filet mignon kielbasa pork loin pork shank andouille.",
    link: "https://www.google.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "14",
    header: "Ribeye and Pork Belly",
    body: "Ribeye pork belly landjaeger meatloaf. Boudin pork belly pork chop drumstick cow strip steak tail meatball landjaeger ground round ball tip beef rump pork loin chislic. Porchetta kevin salami shoulder turkey sausage doner pastrami alcatra drumstick pancetta ham. Beef andouille chuck, brisket meatball pork bacon short loin alcatra tongue pork belly turducken strip steak beef ribs. Sausage turkey porchetta tongue beef ribs pork loin andouille meatloaf filet mignon. Strip steak boudin bacon ribeye pork belly shankle t-bone porchetta.",
    link: "https://www.youtube.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "15",
    header: "Swine Jerky and Capicola",
    body: "Swine jerky flank ball tip capicola pancetta buffalo ham pig. Pork belly swine jerky prosciutto filet mignon. Shank cow ham hock kielbasa, turducken tail bacon ground round jerky flank. Rump beef pork chislic tri-tip filet mignon. Pork chop kielbasa turkey frankfurter strip steak pork loin buffalo ground round meatloaf shankle drumstick spare ribs pancetta ham bresaola. Frankfurter kevin meatball fatback, shankle bresaola drumstick biltong strip steak. Leberkas salami pancetta pork belly.",
    link: "https://www.facebook.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "16",
    header: "T-bone and Capicola",
    body: "Swine t-bone capicola, pork chop beef ribs biltong drumstick leberkas chislic pastrami tenderloin bacon porchetta tongue. Jerky brisket picanha, meatloaf bacon ribeye tenderloin salami landjaeger cow. Kielbasa spare ribs landjaeger sausage shankle. Tenderloin meatloaf ham hock tail, rump t-bone picanha tongue cupim pork ground round.",
    link: "https://www.twitter.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "17",
    header: "Turducken and Brisket",
    body: "Turducken alcatra short ribs porchetta, cow tail flank kielbasa chislic ball tip landjaeger boudin pork loin filet mignon brisket. Picanha tail kielbasa, filet mignon frankfurter sirloin ham hock doner cupim ground round. Meatball beef ground round jowl sausage, short loin jerky spare ribs shank pork cupim. Ground round corned beef filet mignon pork landjaeger leberkas shankle pig tail ham hock spare ribs.",
    link: "https://www.google.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "18",
    header: "Shank and Beef Ribs",
    body: "Shank beef ribs ham shankle cupim kielbasa tongue meatball boudin. Rump prosciutto kevin beef capicola pastrami doner ball tip. Chicken meatloaf prosciutto corned beef bacon. Alcatra tri-tip cow, tail pork chop meatloaf sirloin bresaola pastrami short ribs corned beef burgdoggen ground round. Pig andouille ham hock tail shankle swine cupim turducken buffalo tenderloin leberkas beef turkey pancetta. Jowl t-bone fatback pork loin salami andouille shankle flank short loin.",
    link: "https://www.youtube.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "19",
    header: "Flank and Leberkas",
    body: "Flank tenderloin leberkas, drumstick pig pork belly ribeye boudin hamburger salami bacon kielbasa sirloin doner cow. Sausage picanha meatball pancetta, beef shoulder tongue. Strip steak alcatra venison beef corned beef sausage pastrami spare ribs andouille drumstick. Jowl swine turducken, meatball strip steak pancetta sausage ham pastrami boudin bacon filet mignon frankfurter. Porchetta capicola fatback strip steak.",
    link: "https://www.facebook.com",
    image: "https://picsum.photos/500/280",
  },
  {
    id: "20",
    header: "Chislic and Chuck Special",
    body: "Shankle burgdoggen sausage, chuck bacon cupim strip steak jowl boudin turkey pork chop beef. Chislic shankle cupim pig. Sirloin pastrami hamburger ribeye. Fatback drumstick kevin, rump brisket shoulder frankfurter ball tip short ribs filet mignon alcatra pancetta short loin shankle.",
    link: "https://www.twitter.com",
    image: "https://picsum.photos/500/280",
  },
];

type PaginatedData = {
  data: typeof data;
  total: number;
  page: number;
  limit: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaginatedData>
) {
  const { page = 1, limit = 5 } = req.query;

  const currentPage = parseInt(page as string, 10);
  const pageSize = parseInt(limit as string, 10);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = data.slice(startIndex, endIndex);

  res.status(200).json({
    data: paginatedData,
    total: data.length,
    page: currentPage,
    limit: pageSize,
  });
}
