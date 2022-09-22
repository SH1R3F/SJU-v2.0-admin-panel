import i18n from "@/libs/i18n";
import { ssrCompile, ssrCompileToFunctions } from "vue-template-compiler";

export const $countries = [
	{ label: i18n.t("Saudi Arabia"), value: 0 },
	{ label: i18n.t("Afghanistan"), value: 1 },
	{ label: i18n.t("Albania"), value: 2 },
	{ label: i18n.t("Algeria"), value: 3 },
	{ label: i18n.t("Andorra"), value: 4 },
	{ label: i18n.t("Angola"), value: 5 },
	{ label: i18n.t("Armenia"), value: 6 },
	{ label: i18n.t("Azerbaijan"), value: 7 },
	{ label: i18n.t("Bahamas"), value: 8 },
	{ label: i18n.t("Bahrain"), value: 9 },
	{ label: i18n.t("Bangladesh"), value: 10 },
	{ label: i18n.t("Belarus"), value: 11 },
	{ label: i18n.t("Bolivia"), value: 12 },
	{ label: i18n.t("Botswana"), value: 13 },
	{ label: i18n.t("Cameroon"), value: 14 },
	{ label: i18n.t("Congo"), value: 15 },
	{ label: i18n.t("Cuba"), value: 16 },
	{ label: i18n.t("Cyprus"), value: 17 },
	{ label: i18n.t("Egypt"), value: 18 },
	{ label: i18n.t("Gabon"), value: 19 },
	{ label: i18n.t("Gambia"), value: 20 },
	{ label: i18n.t("Georgia"), value: 21 },
	{ label: i18n.t("Ghana"), value: 22 },
	{ label: i18n.t("Greenland"), value: 23 },
	{ label: i18n.t("Guinea"), value: 24 },
	{ label: i18n.t("Honduras"), value: 25 },
	{ label: i18n.t("Iraq"), value: 26 },
	{ label: i18n.t("Jamaica"), value: 27 },
	{ label: i18n.t("Kuwait"), value: 28 },
	{ label: i18n.t("Lebanon"), value: 29 },
	{ label: i18n.t("Libya"), value: 30 },
	{ label: i18n.t("Morocco"), value: 31 },
	{ label: i18n.t("Mozambique"), value: 32 },
	{ label: i18n.t("Myanmar"), value: 33 },
	{ label: i18n.t("Namibia"), value: 34 },
	{ label: i18n.t("Nepal"), value: 35 },
	{ label: i18n.t("Nicaragua"), value: 36 },
	{ label: i18n.t("Oman"), value: 37 },
	{ label: i18n.t("Palestine"), value: 38 },
	{ label: i18n.t("Senegal"), value: 39 },
	{ label: i18n.t("Sudan"), value: 40 },
	{ label: i18n.t("Tunisia"), value: 41 },
	{ label: i18n.t("United Arab Emirates"), value: 42 },
];

export const $cities = {
	"Saudi Arabia": [
		{ label: i18n.t("Jubail"), value: 0 },
		{ label: i18n.t("Buraidah"), value: 1 },
		{ label: i18n.t("Riyadh"), value: 2 },
		{ label: i18n.t("Mecca"), value: 3 },
		{ label: i18n.t("Medina"), value: 4 },
		{ label: i18n.t("Tabuk"), value: 5 },
		{ label: i18n.t("Dammam"), value: 6 },
		{ label: i18n.t("Al Taeif"), value: 7 },
		{ label: i18n.t("Al Ahsaa"), value: 8 },
		{ label: i18n.t("Al Qatif"), value: 9 },
		{ label: i18n.t("Najran"), value: 10 },
		{ label: i18n.t("Hafr Albatin"), value: 11 },
		{ label: i18n.t("Dabaa"), value: 12 },
		{ label: i18n.t("Al Kharaj"), value: 13 },
		{ label: i18n.t("Yanbu`"), value: 14 },
		{ label: i18n.t("Khobar"), value: 15 },
		{ label: i18n.t("A'ror"), value: 16 },
		{ label: i18n.t("Sakaka"), value: 17 },
		{ label: i18n.t("Jizan"), value: 18 },
		{ label: i18n.t("Al Qarrayat"), value: 19 },
		{ label: i18n.t("Al Zahran"), value: 20 },
		{ label: i18n.t("Al Zelafa"), value: 21 },
		{ label: i18n.t("Al Bahah"), value: 22 },
		{ label: i18n.t("Al Rass"), value: 23 },
		{ label: i18n.t("Besha"), value: 24 },
		{ label: i18n.t("Sehat"), value: 25 },
		{ label: i18n.t("Sharora"), value: 26 },
		{ label: i18n.t("Bahra"), value: 27 },
		{ label: i18n.t("Afif"), value: 28 },
		{ label: i18n.t("Sabia"), value: 29 },
		{ label: i18n.t("Bariq"), value: 30 },
		{ label: i18n.t("Al Aflaj"), value: 31 },
		{ label: i18n.t("Al Bakiria"), value: 32 },
		{ label: i18n.t("Al Moznab"), value: 33 },
		{ label: i18n.t("Al Bada'e"), value: 34 },
		{ label: i18n.t("Riyadh Al Khabraa"), value: 35 },
		{ label: i18n.t("Abha"), value: 36 },
		{ label: i18n.t("Khamees Masheet"), value: 37 },
		{ label: i18n.t("Mahayel Aseer"), value: 38 },
		{ label: i18n.t("Al A'laya"), value: 39 },
		{ label: i18n.t("Aneeza"), value: 40 },
		{ label: i18n.t("Al Namaas"), value: 41 },
		{ label: i18n.t("Jeddah"), value: 42 },
	],
	Afghanistan: [
		{ label: i18n.t("Herat"), value: 0 },
		{ label: i18n.t("Kabul"), value: 1 },
		{ label: i18n.t("Kandahar"), value: 2 },
		{ label: i18n.t("Molah"), value: 3 },
		{ label: i18n.t("Rana"), value: 4 },
		{ label: i18n.t("Shar"), value: 5 },
		{ label: i18n.t("Sharif"), value: 6 },
		{ label: i18n.t("Wazir Akbar Khan"), value: 7 },
	],
	Albania: [
		{ label: i18n.t("Elbasan"), value: 0 },
		{ label: i18n.t("Petran"), value: 1 },
		{ label: i18n.t("Pogradec"), value: 2 },
		{ label: i18n.t("Shkoder"), value: 3 },
		{ label: i18n.t("Tirana"), value: 4 },
		{ label: i18n.t("Ura Vajgurore"), value: 5 },
	],
	Algeria: [
		{ label: i18n.t("Algiers"), value: 0 },
		{ label: i18n.t("Annaba"), value: 1 },
		{ label: i18n.t("Azazga"), value: 2 },
		{ label: i18n.t("Blida"), value: 3 },
		{ label: i18n.t("Bordj"), value: 4 },
		{ label: i18n.t("Bougara"), value: 5 },
		{ label: i18n.t("Cheraga"), value: 6 },
		{ label: i18n.t("Chlef"), value: 7 },
		{ label: i18n.t("Constantine"), value: 8 },
		{ label: i18n.t("Djelfa"), value: 9 },
		{ label: i18n.t("Draria"), value: 10 },
		{ label: i18n.t("Illizi"), value: 11 },
		{ label: i18n.t("Jijel"), value: 12 },
		{ label: i18n.t("Kouba"), value: 13 },
		{ label: i18n.t("Laghouat"), value: 14 },
		{ label: i18n.t("Oran"), value: 15 },
		{ label: i18n.t("Ouargla"), value: 16 },
		{ label: i18n.t("Relizane"), value: 17 },
		{ label: i18n.t("Rouiba"), value: 18 },
		{ label: i18n.t("Saida"), value: 19 },
		{ label: i18n.t("Tamanghasset"), value: 20 },
		{ label: i18n.t("Tiaret"), value: 21 },
		{ label: i18n.t("Tissemsilt"), value: 22 },
		{ label: i18n.t("Tizi"), value: 23 },
		{ label: i18n.t("Tlemcen"), value: 24 },
	],
	Andorra: [
		{ label: i18n.t("Canillo"), value: 0 },
		{ label: i18n.t("Encamp"), value: 1 },
		{ label: i18n.t("Engordany"), value: 2 },
		{ label: i18n.t("Llorts"), value: 3 },
		{ label: i18n.t("Ordino"), value: 4 },
		{ label: i18n.t("Sispony"), value: 5 },
		{ label: i18n.t("Soldeu"), value: 6 },
	],
	Angola: [
		{ label: i18n.t("Ambriz"), value: 0 },
		{ label: i18n.t("Benguela"), value: 1 },
		{ label: i18n.t("Cabinda"), value: 2 },
		{ label: i18n.t("Cacole"), value: 3 },
		{ label: i18n.t("Camabatela"), value: 4 },
		{ label: i18n.t("Cazeta"), value: 5 },
		{ label: i18n.t("Huambo"), value: 6 },
		{ label: i18n.t("Kuito"), value: 7 },
		{ label: i18n.t("Lobito"), value: 8 },
		{ label: i18n.t("Luanda"), value: 9 },
		{ label: i18n.t("Lubango"), value: 10 },
		{ label: i18n.t("Lucapa"), value: 11 },
		{ label: i18n.t("Lumeje"), value: 12 },
		{ label: i18n.t("Malanje"), value: 13 },
		{ label: i18n.t("Menongue"), value: 14 },
		{ label: i18n.t("Muxaluando"), value: 15 },
		{ label: i18n.t("Namibe"), value: 16 },
		{ label: i18n.t("Ondjiva"), value: 17 },
		{ label: i18n.t("Piri"), value: 18 },
		{ label: i18n.t("Saurimo"), value: 19 },
		{ label: i18n.t("Talatona"), value: 20 },
	],
	Armenia: [
		{ label: i18n.t("Abovyan"), value: 0 },
		{ label: i18n.t("Agarak"), value: 1 },
		{ label: i18n.t("Apaga"), value: 2 },
		{ label: i18n.t("Aparan"), value: 3 },
		{ label: i18n.t("Arabkir"), value: 4 },
		{ label: i18n.t("Ashtarak"), value: 5 },
		{ label: i18n.t("Hrazdan"), value: 6 },
		{ label: i18n.t("Ijevan"), value: 7 },
		{ label: i18n.t("Jermuk"), value: 8 },
		{ label: i18n.t("Kapan"), value: 9 },
		{ label: i18n.t("Tsaghkadzor"), value: 10 },
		{ label: i18n.t("Vanadzor"), value: 11 },
		{ label: i18n.t("Yerevan"), value: 12 },
	],
	Azerbaijan: [
		{ label: i18n.t("Baku"), value: 0 },
		{ label: i18n.t("Nakhchivan"), value: 1 },
		{ label: i18n.t("Quba"), value: 2 },
		{ label: i18n.t("Qusar"), value: 3 },
		{ label: i18n.t("Sulutapa"), value: 4 },
		{ label: i18n.t("Sumqayit"), value: 5 },
		{ label: i18n.t("Xirdalan"), value: 6 },
		{ label: i18n.t("Zurges"), value: 7 },
	],
	Bahamas: [
		{ label: i18n.t("Freeport"), value: 0 },
		{ label: i18n.t("Nassau"), value: 1 },
	],
	Bahrain: [
		{ label: i18n.t("Al Budayyi`"), value: 0 },
		{ label: i18n.t("Al Hadd"), value: 1 },
		{ label: i18n.t("Al Hamalah"), value: 2 },
		{ label: i18n.t("Al Janabiyah"), value: 3 },
		{ label: i18n.t("Al Markh"), value: 4 },
		{ label: i18n.t("Al Muharraq"), value: 5 },
		{ label: i18n.t("Bani Jamrah"), value: 6 },
		{ label: i18n.t("Barbar"), value: 7 },
		{ label: i18n.t("Jurdab"), value: 8 },
		{ label: i18n.t("Madinat `Isa"), value: 9 },
		{ label: i18n.t("Madinat Hamad"), value: 10 },
		{ label: i18n.t("Manama"), value: 11 },
		{ label: i18n.t("Oil City"), value: 12 },
		{ label: i18n.t("Sanabis"), value: 13 },
		{ label: i18n.t("Sanad"), value: 14 },
		{ label: i18n.t("Sitrah"), value: 15 },
		{ label: i18n.t("Tubli"), value: 16 },
	],
	Bangladesh: [
		{ label: i18n.t("Agrabad"), value: 0 },
		{ label: i18n.t("Bangla"), value: 1 },
		{ label: i18n.t("Barisal"), value: 2 },
		{ label: i18n.t("Bazar"), value: 3 },
		{ label: i18n.t("Chittagong"), value: 4 },
		{ label: i18n.t("Comilla"), value: 5 },
		{ label: i18n.t("Delta"), value: 6 },
		{ label: i18n.t("Dhaka"), value: 7 },
		{ label: i18n.t("Hossain"), value: 8 },
		{ label: i18n.t("Jessore"), value: 9 },
		{ label: i18n.t("Kabi"), value: 10 },
		{ label: i18n.t("Kazipur"), value: 11 },
		{ label: i18n.t("Mymensingh"), value: 12 },
		{ label: i18n.t("Narayanganj"), value: 13 },
		{ label: i18n.t("Rajshahi"), value: 14 },
		{ label: i18n.t("Tejgaon"), value: 15 },
		{ label: i18n.t("Uttara"), value: 16 },
	],
	Belarus: [
		{ label: i18n.t("Baranovichi"), value: 0 },
		{ label: i18n.t("Borisov"), value: 1 },
		{ label: i18n.t("Brest"), value: 2 },
		{ label: i18n.t("Dzyarzhynsk"), value: 3 },
		{ label: i18n.t("Horki"), value: 4 },
		{ label: i18n.t("Hrodna"), value: 5 },
		{ label: i18n.t("Lahoysk"), value: 6 },
		{ label: i18n.t("Lida"), value: 7 },
		{ label: i18n.t("Lyakhovichi"), value: 8 },
		{ label: i18n.t("Lyaskavichy"), value: 9 },
		{ label: i18n.t("Mazyr"), value: 10 },
		{ label: i18n.t("Minsk"), value: 11 },
		{ label: i18n.t("Mogilev"), value: 12 },
		{ label: i18n.t("Navapolatsk"), value: 13 },
		{ label: i18n.t("Orsha"), value: 14 },
		{ label: i18n.t("Pinsk"), value: 15 },
		{ label: i18n.t("Polatsk"), value: 16 },
		{ label: i18n.t("Radoshkovichi"), value: 17 },
		{ label: i18n.t("Shklow"), value: 18 },
		{ label: i18n.t("Vitebsk"), value: 19 },
		{ label: i18n.t("Zaslawye"), value: 20 },
		{ label: i18n.t("Zhodzina"), value: 21 },
	],
	Bolivia: [
		{ label: i18n.t("Anillo"), value: 0 },
		{ label: i18n.t("Aroma"), value: 1 },
		{ label: i18n.t("Bermejo"), value: 2 },
		{ label: i18n.t("Caracasa"), value: 3 },
		{ label: i18n.t("Cobija"), value: 4 },
		{ label: i18n.t("Cochabamba"), value: 5 },
		{ label: i18n.t("Cotoca"), value: 6 },
		{ label: i18n.t("Cruz"), value: 7 },
		{ label: i18n.t("Guayaramerin"), value: 8 },
		{ label: i18n.t("Oruro"), value: 9 },
		{ label: i18n.t("Riberalta"), value: 10 },
		{ label: i18n.t("Sucre"), value: 11 },
		{ label: i18n.t("Tarija"), value: 12 },
		{ label: i18n.t("Trinidad"), value: 13 },
	],
	Botswana: [
		{ label: i18n.t("Francistown"), value: 0 },
		{ label: i18n.t("Gaborone"), value: 1 },
		{ label: i18n.t("Orapa"), value: 2 },
		{ label: i18n.t("Serowe"), value: 3 },
		{ label: i18n.t("Village"), value: 4 },
	],
	Cameroon: [
		{ label: i18n.t("Bafia"), value: 0 },
		{ label: i18n.t("Bafoussam"), value: 1 },
		{ label: i18n.t("Bamenda"), value: 2 },
		{ label: i18n.t("Buea"), value: 3 },
		{ label: i18n.t("Douala"), value: 4 },
		{ label: i18n.t("Kribi"), value: 5 },
		{ label: i18n.t("Kumba"), value: 6 },
		{ label: i18n.t("Ringo"), value: 7 },
		{ label: i18n.t("Tibati"), value: 8 },
	],
	Congo: [
		{ label: i18n.t("Banana"), value: 0 },
		{ label: i18n.t("Goma"), value: 1 },
		{ label: i18n.t("Kinshasa"), value: 2 },
		{ label: i18n.t("Likasi"), value: 3 },
		{ label: i18n.t("Lubumbashi"), value: 4 },
	],
	Cuba: [
		{ label: i18n.t("Bayamo"), value: 0 },
		{ label: i18n.t("Cienfuegos"), value: 1 },
		{ label: i18n.t("Habana"), value: 2 },
		{ label: i18n.t("Havana"), value: 3 },
		{ label: i18n.t("Matanzas"), value: 4 },
		{ label: i18n.t("Varadero"), value: 5 },
		{ label: i18n.t("Villa"), value: 6 },
	],
	Cyprus: [
		{ label: i18n.t("Aradippou"), value: 0 },
		{ label: i18n.t("Chlorakas"), value: 1 },
		{ label: i18n.t("Deryneia"), value: 2 },
		{ label: i18n.t("Famagusta"), value: 3 },
		{ label: i18n.t("Geroskipou"), value: 4 },
		{ label: i18n.t("Kiti"), value: 5 },
		{ label: i18n.t("Kyrenia"), value: 6 },
		{ label: i18n.t("Larnaca"), value: 7 },
		{ label: i18n.t("Laxia"), value: 8 },
		{ label: i18n.t("Limassol"), value: 9 },
		{ label: i18n.t("Livadia"), value: 10 },
		{ label: i18n.t("Morfou"), value: 11 },
		{ label: i18n.t("Mouttagiaka"), value: 12 },
		{ label: i18n.t("Nicosia"), value: 13 },
		{ label: i18n.t("Paphos"), value: 14 },
		{ label: i18n.t("Paralimni"), value: 15 },
		{ label: i18n.t("Parekklisha"), value: 16 },
		{ label: i18n.t("Prodromi"), value: 17 },
		{ label: i18n.t("Sotira"), value: 18 },
		{ label: i18n.t("Strovolos"), value: 19 },
		{ label: i18n.t("Tera"), value: 20 },
	],
	Egypt: [
		{ label: i18n.t("Al Mahallah al Kubra"), value: 0 },
		{ label: i18n.t("Al Mansurah"), value: 1 },
		{ label: i18n.t("Alexandria"), value: 2 },
		{ label: i18n.t("Assiut"), value: 3 },
		{ label: i18n.t("Bani Suwayf"), value: 4 },
		{ label: i18n.t("Cairo"), value: 5 },
		{ label: i18n.t("Damietta"), value: 6 },
		{ label: i18n.t("Giza"), value: 7 },
		{ label: i18n.t("Ismailia"), value: 8 },
		{ label: i18n.t("Kafr ash Shaykh"), value: 9 },
		{ label: i18n.t("Luxor"), value: 10 },
		{ label: i18n.t("Port Said"), value: 11 },
		{ label: i18n.t("Rafah"), value: 12 },
		{ label: i18n.t("Sohag"), value: 13 },
		{ label: i18n.t("Suez"), value: 14 },
		{ label: i18n.t("Tanta"), value: 15 },
		{ label: i18n.t("Al Sharqeyah"), value: 16 },
	],
	Gabon: [
		{ label: i18n.t("Gamba"), value: 0 },
		{ label: i18n.t("Libreville"), value: 1 },
		{ label: i18n.t("Mamagnia"), value: 2 },
		{ label: i18n.t("Moanda"), value: 3 },
		{ label: i18n.t("Port-Gentil"), value: 4 },
	],
	Georgia: [
		{ label: i18n.t("Gogolesubani"), value: 0 },
		{ label: i18n.t("Kutaisi"), value: 1 },
		{ label: i18n.t("Lentekhi"), value: 2 },
		{ label: i18n.t("Qazbegi"), value: 3 },
		{ label: i18n.t("Samtredia"), value: 4 },
		{ label: i18n.t("Sukhumi"), value: 5 },
		{ label: i18n.t("Tbilisi"), value: 6 },
		{ label: i18n.t("ZemoAvchala"), value: 7 },
		{ label: i18n.t("Zugdidi"), value: 8 },
	],
	Ghana: [
		{ label: i18n.t("Accra"), value: 0 },
		{ label: i18n.t("Bawku"), value: 1 },
		{ label: i18n.t("Berekum"), value: 2 },
		{ label: i18n.t("Bolgatanga"), value: 3 },
		{ label: i18n.t("Home"), value: 4 },
		{ label: i18n.t("Koforidua"), value: 5 },
		{ label: i18n.t("Kumasi"), value: 6 },
		{ label: i18n.t("Legon"), value: 7 },
		{ label: i18n.t("Mampong"), value: 8 },
		{ label: i18n.t("Navrongo"), value: 9 },
		{ label: i18n.t("Sunyani"), value: 10 },
		{ label: i18n.t("Takoradi"), value: 11 },
		{ label: i18n.t("Tema"), value: 12 },
		{ label: i18n.t("Wa"), value: 13 },
		{ label: i18n.t("Winneba"), value: 14 },
	],
	Greenland: [
		{ label: i18n.t("Aasiaat"), value: 0 },
		{ label: i18n.t("Ilulissat"), value: 1 },
		{ label: i18n.t("Kapisillit"), value: 2 },
		{ label: i18n.t("Maniitsoq"), value: 3 },
		{ label: i18n.t("Narsaq"), value: 4 },
		{ label: i18n.t("Narsarsuaq"), value: 5 },
		{ label: i18n.t("Nuuk"), value: 6 },
		{ label: i18n.t("Nuussuaq"), value: 7 },
		{ label: i18n.t("Paamiut"), value: 8 },
		{ label: i18n.t("Qaqortoq"), value: 9 },
		{ label: i18n.t("Qasigiannguit"), value: 10 },
		{ label: i18n.t("Qeqertarsuaq"), value: 11 },
		{ label: i18n.t("Qeqertat"), value: 12 },
		{ label: i18n.t("Sisimiut"), value: 13 },
		{ label: i18n.t("Tasiilaq"), value: 14 },
		{ label: i18n.t("Upernavik"), value: 15 },
	],
	Guinea: [
		{ label: i18n.t("Conakry"), value: 0 },
		{ label: i18n.t("Dabola"), value: 1 },
		{ label: i18n.t("Kalia"), value: 2 },
		{ label: i18n.t("Kankan"), value: 3 },
		{ label: i18n.t("Lola"), value: 4 },
		{ label: i18n.t("Mamou"), value: 5 },
		{ label: i18n.t("Sangaredi"), value: 6 },
	],
	Honduras: [
		{ label: i18n.t("Choloma"), value: 0 },
		{ label: i18n.t("Comayagua"), value: 1 },
		{ label: i18n.t("Comayaguela"), value: 2 },
		{ label: i18n.t("Coxen Hole"), value: 3 },
		{ label: i18n.t("Morazan"), value: 4 },
		{ label: i18n.t("Nacaome"), value: 5 },
		{ label: i18n.t("Pinalejo"), value: 6 },
		{ label: i18n.t("Piraera"), value: 7 },
		{ label: i18n.t("Sula"), value: 8 },
		{ label: i18n.t("Tegucigalpa"), value: 9 },
	],
	Iraq: [
		{ label: i18n.t("Al `Amarah"), value: 0 },
		{ label: i18n.t("Al Hillah"), value: 1 },
		{ label: i18n.t("Baghdad"), value: 2 },
		{ label: i18n.t("Bahr"), value: 3 },
		{ label: i18n.t("Basere"), value: 4 },
		{ label: i18n.t("Basra"), value: 5 },
		{ label: i18n.t("Erbil"), value: 6 },
		{ label: i18n.t("Haji Hasan"), value: 7 },
		{ label: i18n.t("Hayat"), value: 8 },
		{ label: i18n.t("Karkh"), value: 9 },
		{ label: i18n.t("Kirkuk"), value: 10 },
		{ label: i18n.t("Manawi"), value: 11 },
		{ label: i18n.t("Mosul"), value: 12 },
		{ label: i18n.t("Najaf"), value: 13 },
		{ label: i18n.t("Sulaymaniyah"), value: 14 },
		{ label: i18n.t("Tikrit"), value: 15 },
	],
	Jamaica: [
		{ label: i18n.t("Kingston"), value: 0 },
		{ label: i18n.t("Mandeville"), value: 1 },
		{ label: i18n.t("Moneague"), value: 2 },
		{ label: i18n.t("Negril"), value: 3 },
		{ label: i18n.t("Portmore"), value: 4 },
	],
	Kuwait: [
		{ label: i18n.t("Abraq Khaytan"), value: 0 },
		{ label: i18n.t("Ad Dasmah"), value: 1 },
		{ label: i18n.t("Ad Dawhah"), value: 2 },
		{ label: i18n.t("Al Ahmadi"), value: 3 },
		{ label: i18n.t("Al Farwaniyah"), value: 4 },
		{ label: i18n.t("Al Shamiya"), value: 5 },
		{ label: i18n.t("Ar Rawdah"), value: 6 },
		{ label: i18n.t("As Salimiyah"), value: 7 },
		{ label: i18n.t("Ash Shuaybah"), value: 8 },
		{ label: i18n.t("Ash Shuwaykh"), value: 9 },
		{ label: i18n.t("Bayan"), value: 10 },
		{ label: i18n.t("Hawalli"), value: 11 },
		{ label: i18n.t("Janub as Surrah"), value: 12 },
		{ label: i18n.t("Kayfan"), value: 13 },
		{ label: i18n.t("Kuwait City"), value: 14 },
		{ label: i18n.t("Salwa"), value: 15 },
	],
	Lebanon: [
		{ label: i18n.t("Aaley"), value: 0 },
		{ label: i18n.t("Adma"), value: 1 },
		{ label: i18n.t("Ashrafiye"), value: 2 },
		{ label: i18n.t("Baabda"), value: 3 },
		{ label: i18n.t("Baalbek"), value: 4 },
		{ label: i18n.t("Beirut"), value: 5 },
		{ label: i18n.t("Broummana"), value: 6 },
		{ label: i18n.t("Bsalim"), value: 7 },
		{ label: i18n.t("Chekka"), value: 8 },
		{ label: i18n.t("Dbaiye"), value: 9 },
		{ label: i18n.t("Halba"), value: 10 },
		{ label: i18n.t("Hboub"), value: 11 },
		{ label: i18n.t("Sarba"), value: 12 },
		{ label: i18n.t("Sidon"), value: 13 },
		{ label: i18n.t("Tripoli"), value: 14 },
		{ label: i18n.t("Yanar"), value: 15 },
		{ label: i18n.t("Zgharta"), value: 16 },
	],
	Libya: [
		{ label: i18n.t("Benghazi"), value: 0 },
		{ label: i18n.t("Misratah"), value: 1 },
		{ label: i18n.t("Sabha"), value: 2 },
		{ label: i18n.t("Zliten"), value: 3 },
	],
	Morocco: [
		{ label: i18n.t("Afourer"), value: 0 },
		{ label: i18n.t("Agadir"), value: 1 },
		{ label: i18n.t("Assa"), value: 2 },
		{ label: i18n.t("Benguerir"), value: 3 },
		{ label: i18n.t("Berrechid"), value: 4 },
		{ label: i18n.t("Casablanca"), value: 5 },
		{ label: i18n.t("Deroua"), value: 6 },
		{ label: i18n.t("Erfoud"), value: 7 },
		{ label: i18n.t("Fes"), value: 8 },
		{ label: i18n.t("Kenitra"), value: 9 },
		{ label: i18n.t("Khemisset"), value: 10 },
		{ label: i18n.t("Khouribga"), value: 11 },
		{ label: i18n.t("Larache"), value: 12 },
		{ label: i18n.t("Mansour"), value: 13 },
		{ label: i18n.t("Marrakesh"), value: 14 },
		{ label: i18n.t("Mehediyah"), value: 15 },
		{ label: i18n.t("Meknes"), value: 16 },
		{ label: i18n.t("Mohammedia"), value: 17 },
		{ label: i18n.t("Nador"), value: 18 },
		{ label: i18n.t("Ouazzane"), value: 19 },
		{ label: i18n.t("Oujda"), value: 20 },
		{ label: i18n.t("Rabat"), value: 21 },
		{ label: i18n.t("Safi"), value: 22 },
		{ label: i18n.t("Sefrou"), value: 23 },
		{ label: i18n.t("Settat"), value: 24 },
		{ label: i18n.t("Skhirat"), value: 25 },
		{ label: i18n.t("Tahala"), value: 26 },
		{ label: i18n.t("Tan-Tan"), value: 27 },
		{ label: i18n.t("Tangier"), value: 28 },
		{ label: i18n.t("Tarfaya"), value: 29 },
		{ label: i18n.t("Taza"), value: 30 },
		{ label: i18n.t("Temara"), value: 31 },
		{ label: i18n.t("Tiflet"), value: 32 },
		{ label: i18n.t("Tiznit"), value: 33 },
		{ label: i18n.t("Touissite"), value: 34 },
	],
	Mozambique: [
		{ label: i18n.t("Beira"), value: 0 },
		{ label: i18n.t("Maputo"), value: 1 },
		{ label: i18n.t("Matola"), value: 2 },
		{ label: i18n.t("Mozambique"), value: 3 },
		{ label: i18n.t("Nampula"), value: 4 },
		{ label: i18n.t("Pemba"), value: 5 },
		{ label: i18n.t("Quelimane"), value: 6 },
		{ label: i18n.t("Tete"), value: 7 },
	],
	Myanmar: [
		{ label: i18n.t("Hlaing"), value: 0 },
		{ label: i18n.t("Inya"), value: 1 },
		{ label: i18n.t("Kyauktada"), value: 2 },
		{ label: i18n.t("Mandalay"), value: 3 },
		{ label: i18n.t("Wagan"), value: 4 },
		{ label: i18n.t("Yangon"), value: 5 },
	],
	Namibia: [
		{ label: i18n.t("Etunda"), value: 0 },
		{ label: i18n.t("Grootfontein"), value: 1 },
		{ label: i18n.t("Keetmanshoop"), value: 2 },
		{ label: i18n.t("Mpapuka"), value: 3 },
		{ label: i18n.t("Olympia"), value: 4 },
		{ label: i18n.t("Ondangwa"), value: 5 },
		{ label: i18n.t("Ongwediva"), value: 6 },
		{ label: i18n.t("Oranjemund"), value: 7 },
		{ label: i18n.t("Oshakati"), value: 8 },
		{ label: i18n.t("Otjiwarongo"), value: 9 },
		{ label: i18n.t("Outapi"), value: 10 },
		{ label: i18n.t("Swakopmund"), value: 11 },
		{ label: i18n.t("Tsumeb"), value: 12 },
		{ label: i18n.t("Windhoek"), value: 13 },
	],
	Nepal: [
		{ label: i18n.t("Bharatpur"), value: 0 },
		{ label: i18n.t("Jawlakhel"), value: 1 },
		{ label: i18n.t("Kathmandu"), value: 2 },
		{ label: i18n.t("Lumbini"), value: 3 },
		{ label: i18n.t("Palpa"), value: 4 },
		{ label: i18n.t("Patan"), value: 5 },
	],
	Nicaragua: [
		{ label: i18n.t("Bluefields"), value: 0 },
		{ label: i18n.t("Chinandega"), value: 1 },
		{ label: i18n.t("Esteli"), value: 2 },
		{ label: i18n.t("Granada"), value: 3 },
		{ label: i18n.t("Jinotega"), value: 4 },
		{ label: i18n.t("Managua"), value: 5 },
		{ label: i18n.t("Masaya"), value: 6 },
		{ label: i18n.t("Matagalpa"), value: 7 },
		{ label: i18n.t("Ocotal"), value: 8 },
		{ label: i18n.t("Rivas"), value: 9 },
	],
	Oman: [
		{ label: i18n.t("Al Sohar"), value: 0 },
		{ label: i18n.t("Muscat"), value: 1 },
		{ label: i18n.t("Nizwa"), value: 2 },
		{ label: i18n.t("Ruwi"), value: 3 },
		{ label: i18n.t("Saham"), value: 4 },
		{ label: i18n.t("Salalah"), value: 5 },
		{ label: i18n.t("Samad"), value: 6 },
	],
	Palestine: [
		{ label: i18n.t("Al Mawasi"), value: 0 },
		{ label: i18n.t("Bethlehem"), value: 1 },
		{ label: i18n.t("Gaza"), value: 2 },
		{ label: i18n.t("Hebron"), value: 3 },
		{ label: i18n.t("Jenin"), value: 4 },
		{ label: i18n.t("Jericho"), value: 5 },
		{ label: i18n.t("Nablus"), value: 6 },
		{ label: i18n.t("Ramallah"), value: 7 },
	],
	Senegal: [
		{ label: i18n.t("Boussinki"), value: 0 },
		{ label: i18n.t("Camberene"), value: 1 },
		{ label: i18n.t("Dakar"), value: 2 },
		{ label: i18n.t("Dodji"), value: 3 },
		{ label: i18n.t("Guediawaye"), value: 4 },
		{ label: i18n.t("Kaolack"), value: 5 },
		{ label: i18n.t("Kedougou"), value: 6 },
		{ label: i18n.t("Louga"), value: 7 },
		{ label: i18n.t("Saint-Louis"), value: 8 },
		{ label: i18n.t("Sama"), value: 9 },
		{ label: i18n.t("Tanaf"), value: 10 },
	],
	Sudan: [
		{ label: i18n.t("Kassala"), value: 0 },
		{ label: i18n.t("Khartoum"), value: 1 },
		{ label: i18n.t("Nyala"), value: 2 },
		{ label: i18n.t("Shendi"), value: 3 },
		{ label: i18n.t("Thabit"), value: 4 },
		{ label: i18n.t("Umm Durman"), value: 5 },
	],
	Tunisia: [
		{ label: i18n.t("Ariana"), value: 0 },
		{ label: i18n.t("Beja"), value: 1 },
		{ label: i18n.t("Gafsa"), value: 2 },
		{ label: i18n.t("Hammamet"), value: 3 },
		{ label: i18n.t("Le Bardo"), value: 4 },
		{ label: i18n.t("Manouba"), value: 5 },
		{ label: i18n.t("Monastir"), value: 6 },
		{ label: i18n.t("Rades"), value: 7 },
		{ label: i18n.t("Sfax"), value: 8 },
		{ label: i18n.t("Sidi Bouzid"), value: 9 },
		{ label: i18n.t("Sousse"), value: 10 },
		{ label: i18n.t("Tunis"), value: 11 },
	],
	"United Arab Emirates": [
		{ label: i18n.t("Abu Dhabi"), value: 0 },
		{ label: i18n.t("Al Ain"), value: 1 },
		{ label: i18n.t("Al Khan"), value: 2 },
		{ label: i18n.t("Ar Ruways"), value: 3 },
		{ label: i18n.t("As Satwah"), value: 4 },
		{ label: i18n.t("Dayrah"), value: 5 },
		{ label: i18n.t("Dubai"), value: 6 },
		{ label: i18n.t("Fujairah"), value: 7 },
		{ label: i18n.t("Ras alKhaimah"), value: 8 },
		{ label: i18n.t("Sharjah"), value: 9 },
	],
};

export const $mobileCodes = [
	{ label: "+93", value: "93" },
	{ label: "+358", value: "358" },
	{ label: "+355", value: "355" },
	{ label: "+213", value: "213" },
	{ label: "+1684", value: "1684" },
	{ label: "+376", value: "376" },
	{ label: "+244", value: "244" },
	{ label: "+1264", value: "1264" },
	{ label: "+1268", value: "1268" },
	{ label: "+54", value: "54" },
	{ label: "+374", value: "374" },
	{ label: "+297", value: "297" },
	{ label: "+43", value: "43" },
	{ label: "+994", value: "994" },
	{ label: "+1242", value: "1242" },
	{ label: "+973", value: "973" },
	{ label: "+880", value: "880" },
	{ label: "+1246", value: "1246" },
	{ label: "+375", value: "375" },
	{ label: "+32", value: "32" },
	{ label: "+501", value: "501" },
	{ label: "+229", value: "229" },
	{ label: "+1441", value: "1441" },
	{ label: "+975", value: "975" },
	{ label: "+591", value: "591" },
	{ label: "+387", value: "387" },
	{ label: "+267", value: "267" },
	{ label: "+55", value: "55" },
	{ label: "+246", value: "246" },
	{ label: "+673", value: "673" },
	{ label: "+359", value: "359" },
	{ label: "+226", value: "226" },
	{ label: "+257", value: "257" },
	{ label: "+855", value: "855" },
	{ label: "+237", value: "237" },
	{ label: "+1", value: "1" },
	{ label: "+238", value: "238" },
	{ label: "+ 345", value: " 345" },
	{ label: "+236", value: "236" },
	{ label: "+235", value: "235" },
	{ label: "+56", value: "56" },
	{ label: "+86", value: "86" },
	{ label: "+61", value: "61" },
	{ label: "+57", value: "57" },
	{ label: "+269", value: "269" },
	{ label: "+242", value: "242" },
	{ label: "+243", value: "243" },
	{ label: "+682", value: "682" },
	{ label: "+506", value: "506" },
	{ label: "+225", value: "225" },
	{ label: "+385", value: "385" },
	{ label: "+53", value: "53" },
	{ label: "+357", value: "357" },
	{ label: "+420", value: "420" },
	{ label: "+45", value: "45" },
	{ label: "+253", value: "253" },
	{ label: "+1767", value: "1767" },
	{ label: "+1849", value: "1849" },
	{ label: "+593", value: "593" },
	{ label: "+20", value: "20" },
	{ label: "+503", value: "503" },
	{ label: "+240", value: "240" },
	{ label: "+291", value: "291" },
	{ label: "+372", value: "372" },
	{ label: "+251", value: "251" },
	{ label: "+500", value: "500" },
	{ label: "+298", value: "298" },
	{ label: "+679", value: "679" },
	{ label: "+33", value: "33" },
	{ label: "+594", value: "594" },
	{ label: "+689", value: "689" },
	{ label: "+241", value: "241" },
	{ label: "+220", value: "220" },
	{ label: "+995", value: "995" },
	{ label: "+49", value: "49" },
	{ label: "+233", value: "233" },
	{ label: "+350", value: "350" },
	{ label: "+30", value: "30" },
	{ label: "+299", value: "299" },
	{ label: "+1473", value: "1473" },
	{ label: "+590", value: "590" },
	{ label: "+1671", value: "1671" },
	{ label: "+502", value: "502" },
	{ label: "+224", value: "224" },
	{ label: "+245", value: "245" },
	{ label: "+509", value: "509" },
	{ label: "+379", value: "379" },
	{ label: "+504", value: "504" },
	{ label: "+852", value: "852" },
	{ label: "+36", value: "36" },
	{ label: "+354", value: "354" },
	{ label: "+91", value: "91" },
	{ label: "+62", value: "62" },
	{ label: "+98", value: "98" },
	{ label: "+964", value: "964" },
	{ label: "+353", value: "353" },
	{ label: "+972", value: "972" },
	{ label: "+39", value: "39" },
	{ label: "+1876", value: "1876" },
	{ label: "+81", value: "81" },
	{ label: "+962", value: "962" },
	{ label: "+77", value: "77" },
	{ label: "+254", value: "254" },
	{ label: "+686", value: "686" },
	{ label: "+850", value: "850" },
	{ label: "+82", value: "82" },
	{ label: "+965", value: "965" },
	{ label: "+996", value: "996" },
	{ label: "+856", value: "856" },
	{ label: "+371", value: "371" },
	{ label: "+961", value: "961" },
	{ label: "+266", value: "266" },
	{ label: "+231", value: "231" },
	{ label: "+218", value: "218" },
	{ label: "+423", value: "423" },
	{ label: "+370", value: "370" },
	{ label: "+352", value: "352" },
	{ label: "+853", value: "853" },
	{ label: "+389", value: "389" },
	{ label: "+261", value: "261" },
	{ label: "+265", value: "265" },
	{ label: "+60", value: "60" },
	{ label: "+960", value: "960" },
	{ label: "+223", value: "223" },
	{ label: "+356", value: "356" },
	{ label: "+692", value: "692" },
	{ label: "+596", value: "596" },
	{ label: "+222", value: "222" },
	{ label: "+230", value: "230" },
	{ label: "+52", value: "52" },
	{ label: "+691", value: "691" },
	{ label: "+373", value: "373" },
	{ label: "+377", value: "377" },
	{ label: "+976", value: "976" },
	{ label: "+382", value: "382" },
	{ label: "+1664", value: "1664" },
	{ label: "+212", value: "212" },
	{ label: "+258", value: "258" },
	{ label: "+95", value: "95" },
	{ label: "+264", value: "264" },
	{ label: "+674", value: "674" },
	{ label: "+977", value: "977" },
	{ label: "+31", value: "31" },
	{ label: "+599", value: "599" },
	{ label: "+687", value: "687" },
	{ label: "+64", value: "64" },
	{ label: "+505", value: "505" },
	{ label: "+227", value: "227" },
	{ label: "+234", value: "234" },
	{ label: "+683", value: "683" },
	{ label: "+672", value: "672" },
	{ label: "+1670", value: "1670" },
	{ label: "+968", value: "968" },
	{ label: "+92", value: "92" },
	{ label: "+680", value: "680" },
	{ label: "+970", value: "970" },
	{ label: "+507", value: "507" },
	{ label: "+675", value: "675" },
	{ label: "+595", value: "595" },
	{ label: "+51", value: "51" },
	{ label: "+63", value: "63" },
	{ label: "+872", value: "872" },
	{ label: "+48", value: "48" },
	{ label: "+351", value: "351" },
	{ label: "+1939", value: "1939" },
	{ label: "+974", value: "974" },
	{ label: "+40", value: "40" },
	{ label: "+7", value: "7" },
	{ label: "+250", value: "250" },
	{ label: "+262", value: "262" },
	{ label: "+290", value: "290" },
	{ label: "+1869", value: "1869" },
	{ label: "+1758", value: "1758" },
	{ label: "+508", value: "508" },
	{ label: "+1784", value: "1784" },
	{ label: "+685", value: "685" },
	{ label: "+378", value: "378" },
	{ label: "+239", value: "239" },
	{ label: "+966", value: "966" },
	{ label: "+221", value: "221" },
	{ label: "+381", value: "381" },
	{ label: "+248", value: "248" },
	{ label: "+232", value: "232" },
	{ label: "+65", value: "65" },
	{ label: "+421", value: "421" },
	{ label: "+386", value: "386" },
	{ label: "+677", value: "677" },
	{ label: "+252", value: "252" },
	{ label: "+27", value: "27" },
	{ label: "+211", value: "211" },
	{ label: "+34", value: "34" },
	{ label: "+94", value: "94" },
	{ label: "+249", value: "249" },
	{ label: "+597", value: "597" },
	{ label: "+47", value: "47" },
	{ label: "+268", value: "268" },
	{ label: "+46", value: "46" },
	{ label: "+41", value: "41" },
	{ label: "+963", value: "963" },
	{ label: "+886", value: "886" },
	{ label: "+992", value: "992" },
	{ label: "+255", value: "255" },
	{ label: "+66", value: "66" },
	{ label: "+670", value: "670" },
	{ label: "+228", value: "228" },
	{ label: "+690", value: "690" },
	{ label: "+676", value: "676" },
	{ label: "+1868", value: "1868" },
	{ label: "+216", value: "216" },
	{ label: "+90", value: "90" },
	{ label: "+993", value: "993" },
	{ label: "+1649", value: "1649" },
	{ label: "+688", value: "688" },
	{ label: "+256", value: "256" },
	{ label: "+380", value: "380" },
	{ label: "+971", value: "971" },
	{ label: "+44", value: "44" },
	{ label: "+598", value: "598" },
	{ label: "+998", value: "998" },
	{ label: "+678", value: "678" },
	{ label: "+58", value: "58" },
	{ label: "+84", value: "84" },
	{ label: "+1284", value: "1284" },
	{ label: "+1340", value: "1340" },
	{ label: "+681", value: "681" },
	{ label: "+967", value: "967" },
	{ label: "+260", value: "260" },
	{ label: "+263", value: "263" },
];

export const $status = [
	{ text: i18n.t("Inactive"), value: 0 },
	{ text: i18n.t("Active"), value: 1 },
];

export const $courseStatus = [
	{ text: i18n.t("Hidden"), value: 0 },
	{ text: i18n.t("Active"), value: 1 },
	{ text: i18n.t("Registration finished"), value: 2 },
	{ text: i18n.t("Postponed"), value: 3 },
	{ text: i18n.t("Full"), value: 4 },
	{ text: i18n.t("Private"), value: 5 },
];

export const $updateRequestsOptions = [
	{ text: i18n.t("Needs update"), value: 0 },
	{ text: i18n.t("Updated"), value: 1 },
];

export const $genders = [
	{ text: i18n.t("Male"), value: 0 },
	{ text: i18n.t("Female"), value: 1 },
];

export const $languages = [
	{ label: i18n.t("Arabic"), value: 0 },
	{ label: i18n.t("English"), value: 1 },
];

export const $layouts = [
	{ label: i18n.t("A4 landscape"), value: 0 },
	{ label: i18n.t("A4 portrait"), value: 1 },
	{ label: i18n.t("Letter landscape"), value: 2 },
	{ label: i18n.t("Letter portrait"), value: 3 },
	{ label: i18n.t("A3 landscape"), value: 4 },
	{ label: i18n.t("A3 portrait"), value: 5 },
];

export const $days = [
	{ label: i18n.t("Saturday"), value: 1 },
	{ label: i18n.t("Sunday"), value: 2 },
	{ label: i18n.t("Monday"), value: 3 },
	{ label: i18n.t("Tuesday"), value: 4 },
	{ label: i18n.t("Wednesday"), value: 5 },
	{ label: i18n.t("Thursday"), value: 6 },
	{ label: i18n.t("Friday"), value: 7 },
];

export const $packages = [
	// Also called prices
	{ label: i18n.t("Free"), value: 0 },
	{ label: i18n.t("All paid"), value: 1 },
	{ label: i18n.t("Paid certificate"), value: 2 },
];

// Members
export const $membershipTypes = [
	{ label: i18n.t("Full time"), value: 0 },
	{ label: i18n.t("Part time"), value: 1 },
	{ label: i18n.t("Affiliated"), value: 2 },
];
// Members
export const $membershipStatus = [
	{ label: i18n.t("Waiting branch approval"), value: 0 },
	{ label: i18n.t("Waiting admin approval"), value: 1 },
	{ label: i18n.t("Refused"), value: 2 },
	{ label: i18n.t("Waiting to pay"), value: 3 },
	{ label: i18n.t("Active"), value: 4 },
];

export const $invoiceStatus = [
	{ label: i18n.t("Unpaid"), value: 0 },
	{ label: i18n.t("Paid"), value: 1 },
];
export const $newspaperTypes = [
	{ label: i18n.t("Printed newspaper"), value: 0 },
	{ label: i18n.t("E-newspaper"), value: 1 },
];
export const $levels = [
	{ label: i18n.t("Fair"), value: 0 },
	{ label: i18n.t("Good"), value: 1 },
	{ label: i18n.t("Very good"), value: 2 },
	{ label: i18n.t("Excelent"), value: 3 },
];
