import Appbar from "@/components/Appbar";
import Card from "@/components/Card";
import Window from "@/components/Window";
import BlogCard from "@/components/BlogCard";
import React from "react";

export default function Home() {
  return (
    <div>
      <Appbar />
      {/* first */}
      <div className="p-6 md:p-8 lg:p-12 bg-[#E4E5DF] text-[#313131] space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#27563A] border-l-8 border-[#27563A] p-2 font-bold text-left">
          डेस्टिनेशन कोकण: निवृत्तीनंतरच्या सुखद जीवनासाठी आदर्श निवासस्थान
        </h1>

        <p className="text-base md:text-lg leading-relaxed">
          निवृत्तीनंतरचा काळ म्हणजे एक नवीन पर्व. कामाच्या धकाधकीतून मुक्त होऊन
          स्वतःसाठी वेळ काढण्याचा, आवडीचे छंद जोपासण्याचा आणि शांत, सुखी जीवन
          जगण्याचा काळ. या स्वप्नवत निवृत्तीनंतरच्या आयुष्यासाठी कोकणसारखे दुसरे
          ठिकाण असूच शकत नाही. कोकणातील हिरवीगार वनराई, स्वच्छ हवा, निवांत
          गावांचे सौंदर्य, आणि नैसर्गिक साधनसंपत्ती हे निवृत्तीनंतर सुखकर आणि
          आरोग्यदायी जीवन जगण्यासाठी सर्वार्थाने योग्य आहे.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">
          कोकणातील निवासस्थानाची वैशिष्ट्ये
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          कोकणातील जीवनशैली आणि वातावरण हे शहरांच्या तुलनेत पूर्णपणे वेगळे आहे.
          या ठिकाणी तुम्हाला मिळतो तो शांतता, प्राकृत वातावरण, आणि ताज्या
          शेतमालाचा आस्वाद. निवृत्तीनंतर, जिथे आर्थिक ताण कमी असावा, मानसिक
          समाधान मिळावे, आणि आरोग्य जपले जावे, असे घर हवे असते. कोकण हे या सर्व
          गरजा पूर्ण करणारे ठिकाण आहे.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              1) हिरवा निसर्ग आणि शांत वातावरण
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              शहरांतील प्रचंड रहदारी, प्रदूषण, आणि गोंगाटापासून दूर, कोकणातील
              गावांमध्ये स्वच्छ हवा, निसर्गाच्या सान्निध्यात शांतता, आणि
              प्रदूषणमुक्त वातावरण आहे. सकाळी सूर्याची कोवळी किरणे, पक्ष्यांचा
              किलबिलाट, आणि सायंकाळी समुद्राच्या लाटांचे गूज हे निवृत्तीनंतरच्या
              जीवनाचे आनंद द्विगुणित करते. हे सर्व एकत्र मिळून मनःशांती आणि
              ताजेतवानेपणाची अनुभूती देतात.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              2) स्वस्त जीवनमान
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              कोकणातील जीवनशैली शहरांच्या तुलनेत स्वस्त आहे. येथे राहणीमानाचा
              खर्च कमी आहे, जसे की घराचे बांधकाम, अन्नधान्य, रोजच्या गरजा,
              इत्यादींचा खर्च मोठ्या शहरांच्या तुलनेत खूपच कमी आहे.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              3) ताज्या अन्नधान्याचा वापर
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              कोकणातील मातीची गुणवत्ता आणि हवामानामुळे येथे पिकणारी पिके ताजी
              आणि पोषक असतात. स्थानिक शेतकऱ्यांकडून ताजे फळे-भाज्या, नारळ, आंबा,
              काजू, इत्यादी मिळवता येतात.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              4) आरोग्यदायी जीवनशैली
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              निवृत्तीनंतर शरीर आणि मन दोन्ही निरोगी ठेवणे महत्त्वाचे असते.
              कोकणात मॉर्निंग वॉक, इव्हनिंग वॉक, समुद्र किनाऱ्यावरील योगा, आणि
              परसबागेत केलेली छोटी-मोठी कामे ही केवळ व्यायामासाठीच नाही, तर
              मन:शांतीसाठीही उपयुक्त ठरतात.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              5) कस्टमाइज्ड घरबांधणीचे स्वातंत्र्य
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              कोकणात जमिनीचे दर शहरांच्या तुलनेत कमी असल्यामुळे येथे हवे तसे,
              आपल्या आवडीनुसार घर बांधता येते. निवृत्तीनंतरचे घर हे केवळ वास्तू
              न राहता, तुमच्या विचारांचे प्रतिबिंब बनते.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              6) उत्पन्नाचे साधन म्हणून होम-स्टे किंवा हॉलिडे होम
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              निवृत्तीनंतरही उत्पन्नाचे साधन असावे, हे अनेकांचे स्वप्न असते.
              कोकणातील तुमच्या रिटायरमेंट होमचा काही भाग तुम्ही होम स्टे किंवा
              हॉलिडे होम म्हणून भाड्याने देऊ शकता.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              7) समुद्रकिनारे, किल्ले, आणि पर्यटकांची गर्दी
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              कोकणातील प्रेक्षणीय स्थळे, जसे की समुद्रकिनारे, किल्ले, जलप्रपात,
              आणि निसर्गरम्य ठिकाणे, हे सर्व पर्यटकांना आकृष्ट करतात.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold">
            आमच्याशी संपर्क साधा
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            जर तुम्हाला निवृत्तीनंतर कोकणात एक सुंदर, निसर्गरम्य आणि सुखी जीवन
            घालवायचे असेल, तर आमच्याशी संपर्क साधा. आम्ही तुमच्यासाठी आदर्श
            निवासस्थान शोधून देऊ.
          </p>
        </div>

        <p className="text-center text-[#27563A]  text-base md:text-lg italic mt-4">
          "डेस्टिनेशन कोकण—निवृत्तीनंतरचा नवीन अध्याय, जिथे प्रत्येक दिवस
          स्वप्नासारखा!"
        </p>
      </div>
      {/* second */}
      <div className="p-6 md:p-8 lg:p-12 bg-white text-[#313131] space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#27563A] border-l-8 border-[#27563A] p-2 font-bold text-left">
          डेस्टिनेशन कोकण: एक आदर्श गुंतवणूक संधी
        </h1>

        <p className="text-base md:text-lg leading-relaxed">
          कोकण म्हणजे नैसर्गिक संपदेचा खजिना. आंबा, नारळ, सुपारी, काजूच्या बागा,
          हिरवळलेल्या भाताच्या शेतजमिनी, लांबलचक आणि स्वच्छ समुद्रकिनारे, घनदाट
          जंगले, ऐतिहासिक किल्ले आणि पर्यटनस्थळे—हे सर्व कोकणाला गुंतवणुकीसाठी
          आकर्षक बनवतात. इन्फ्रास्ट्रक्चर डेव्हलपमेंट, रस्ते, रेल्वे, प्रस्तावित
          जलवाहतूक आणि विमानसेवा यांच्या विकासामुळे कोकणातील व्यवसायाला नवी दिशा
          मिळणार आहे.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              1) कृषी व बागायती शेती
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              आंबा, नारळ, काजू, सुपारी यांसारख्या बागायती पिकांमध्ये गुंतवणूक ही
              दीर्घकालीन नफा देणारी ठरू शकते.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              2) पर्यटन आणि रिसॉर्ट्स
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              कोकणातील निसर्गरम्य समुद्रकिनारे, हिल स्टेशन्स आणि पुरातन स्थळे
              पर्यटकांना आकर्षित करतात. त्यामुळे रिसॉर्ट्स, होम-स्टे आणि इतर
              पर्यटन सेवा सुरु करण्यासाठी हे एक उत्तम ठिकाण आहे.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              3) इन्फ्रास्ट्रक्चर डेव्हलपमेंट
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              रस्ते, रेल्वे, जलवाहतूक आणि प्रस्तावित विमानसेवा यामुळे कोकणातील
              व्यापार आणि वाहतूक सुलभ होईल, ज्याचा फायदा नवीन व्यवसायांना होणार
              आहे.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              4) दुग्धव्यवसाय आणि भाजीपाला शेती
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              कोकणातील सेंद्रिय उत्पादनांची मागणी वाढत आहे. त्यामुळे
              दुग्धव्यवसाय आणि भाजीपाला शेतीसाठी येथे भरपूर स्कोप आहे.
            </p>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold">
          कोकणी चाकरमान्यांसाठी संदेश
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          परप्रांतीय गुंतवणूकदार येऊन कोकणातील जमिनी खरेदी करत आहेत. याऐवजी
          कोकणी चाकरमान्यांनीच आपले मूळ गाव, जमिनी आणि संसाधने यांचा योग्य वापर
          करून उद्योग-व्यवसायात गुंतवणूक करावी, असे या विकासाच्या प्रक्रियेचे
          मुख्य उद्दिष्ट आहे. वेळेवर केलेली गुंतवणूक भविष्यातील मोठा फायदा देऊ
          शकते.
        </p>

        <p className="text-center text-[#27563A] text-base md:text-lg italic mt-4">
          "आता वेळ आहे—कोकणाला एक नवी दिशा देण्याची आणि तुमच्या गावात गुंतवणूक
          करून आर्थिक स्थैर्य मिळवण्याची!"
        </p>
      </div>
      {/* third */}
      <div className="p-6 md:p-8 lg:p-12 bg-[#E4E5DF] text-[#313131] space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#27563A] border-l-8 border-[#27563A] p-2 font-bold text-left">
          डेस्टिनेशन कोकण: नवीन पिढीसाठी एक भावनिक दुवा
        </h1>

        <p className="text-base md:text-lg leading-relaxed">
          शहरीकरणाच्या या युगात, अनेक कुटुंबांचे गावाशी असलेले नाते हळूहळू तुटत
          चालले आहे. आपल्या परंपरांचा वारसा जपणारी आणि निसर्गाच्या सानिध्यात
          राहून मन:शांती देणारी कोकणातील घरं ही एक नवीन पिढीसाठीची गरज बनली आहे.
          आजच्या धकाधकीच्या जीवनशैलीत, कोकणातील घर म्हणजे एका प्रकारचा आधार, एक
          आश्वासक आणि शांत निवासस्थान आहे, ज्यामुळे भविष्यातील पिढ्यांना आपल्या
          मुळांशी जोडून ठेवता येते.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">
          कोकणातील घराचे सांस्कृतिक आणि भावनिक महत्त्व
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          कोकणातील घर हे केवळ एक वास्तू नसून, ते आपल्या पूर्वजांच्या आठवणी,
          गावातील नाती, सण-उत्सव आणि संस्कृतीचे साक्षीदार आहे. यामुळेच, नव्या
          पिढीला आपल्या सांस्कृतिक मुळांशी जोडून ठेवण्यासाठी, गावातील घराचे
          महत्त्व अधिक वाढले आहे. गावातील सण, उत्सव, गुढीपाडवा, शिमगा, कोजागिरी
          असे पारंपारिक सण साजरे करताना मुलांना आपल्या संस्कृतीची ओळख होते, ज्या
          त्यांच्या मनात संस्कारांचे बीज पेरतात. अशा घरांमुळे मुलांना फक्त एक
          वास्तू नाही तर एक संस्कृतीचा वारसा मिळतो.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              शहरी जीवनाच्या तणावापासून मुक्तता
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              कोकणातील स्वच्छ हवा, शुद्ध पाणी, आणि निसर्गसंपन्न वातावरण यामुळे
              शहरी जीवनाच्या ताण-तणावापासून मुक्तता मिळते. शहरातील गोंधळ,
              प्रदूषण, आणि अव्यवस्थित जीवनशैलीमुळे निर्माण होणारी निराशा दूर
              करून कोकणातील शांतता आणि सौंदर्य मनाला शांती देते. गावातील घरात
              सुट्ट्यांच्या काळात राहून कुटुंबासोबत वेळ घालवणे हे मानसिक
              ताजेतवानेपणा देणारे ठरते.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              उत्पन्नाचे साधन आणि पर्यटन व्यवसाय
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              आधुनिक युगात पर्यटन व्यवसायाने मोठी क्रांती केली आहे. कोकणातील
              घराचे आधुनिकतेशी योग्य नियोजन करून, पर्यटनाच्या माध्यमातून
              उत्पन्नाचे स्रोत निर्माण करता येतात. एक उत्तम ‘सेकंड होम’ म्हणून
              कोकणातील घराचे उपयोग होऊ शकतात. डिजिटल माध्यमांचा वापर करून
              पर्यटकांना आकर्षित करणे, आपले घर पर्यटनासाठी विकसित करणे, आणि या
              व्यवसायातून तरुण पिढीला एक उत्पन्नाचा मार्ग उपलब्ध करून देणे, हे
              भविष्यातील गरजेचे आहे.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              आपत्तीच्या वेळी सुरक्षितता
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              कोकणातील घराचे अजून एक महत्त्व म्हणजे, शहरातील आकस्मिक संकटांपासून
              सुरक्षितता मिळवण्यासाठी, एखाद्या आपत्तीच्या वेळी गावाकडचे घर खूप
              उपयोगी ठरते. कोरोना महामारीच्या काळात हे दिसून आले की, ज्यांचे
              गावात घर होते त्यांना सुरक्षिततेसाठी तिथे जाणे शक्य झाले.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              सांस्कृतिक मुळांशी जोडणारा एक भावनिक दुवा
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              आधुनिक पिढीच्या दृष्टीकोनातून विचार केला तर, गावातील घर हे केवळ एक
              निवासस्थान नसून, त्यामागे कौटुंबिक मूल्ये, संस्कार, आणि सांस्कृतिक
              वारसा जपण्याची संधी आहे. यामुळेच, नवीन पिढीला आपल्या मुळांशी जोडून
              ठेवण्यासाठी, कोकणातील ‘सेकंड होम’ एक उत्तम पर्याय आहे. एक असे
              ठिकाण जे त्यांना त्यांच्या पूर्वजांच्या आठवणींशी, संस्कृतीशी, आणि
              गावातील मातीच्या सुगंधाशी जोडून ठेवते.
            </p>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold">
          भविष्याची गुंतवणूक
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          शहराच्या गोंधळातून बाहेर पडून, कोकणात स्वतःसाठी आणि आपल्या कुटुंबासाठी
          हक्काचे घर बांधणे, म्हणजे एक भविष्याची गुंतवणूक आहे. ही गुंतवणूक केवळ
          संपत्ती नाही तर संस्कार, मूल्य, आणि वारसा जपण्यासाठीची एक विचारशील
          कृती आहे. त्यामुळेच, डेस्टिनेशन कोकण हा फक्त एक स्थळ नाही तर एक अनुभव,
          एक कुटुंबाची आणि संस्कृतीची नवी ओळख आहे.
        </p>

        <p className="text-center text-[#27563A]  text-base md:text-lg italic mt-4">
          "डेस्टिनेशन कोकण: नवीन पिढीचा वारसा, संस्कार आणि हक्काचं निवासस्थान"
        </p>
      </div>
      {/* fourth */}
      <div className="p-6 md:p-8 lg:p-12 bg-white text-[#313131] space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#27563A] border-l-8 border-[#27563A] p-2 font-bold text-left">
          डेस्टिनेशन कोकण: एक आदर्श सेकंड होमसाठीच ठिकाण
        </h1>

        <p className="text-base md:text-lg leading-relaxed">
          कोकण म्हणजे निसर्गाची कुशी! हिरवाईने नटलेली माळराने, समुद्राची गाज,
          डोंगर-दऱ्यांच्या उंचच उंच रांगा आणि मन मोहून टाकणारा
          निसर्गसौंदर्य—यातले प्रत्येक वर्णन कोकणाचे रूप उलगडते. मुंबई, पुणे,
          आणि ठाण्यासारख्या धावपळीच्या शहरांतून सुटका मिळवून, कोकणातला निवांतपणा
          अनुभवणे म्हणजे एक अनोखा आनंद आहे. या कारणानेच, हल्ली लोकांना कोकणात
          सेकंड होम घेण्याची मोठी आवड निर्माण होत आहे.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">
          सेकंड होम साठीचा बदलता ट्रेंड!
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          पूर्वी लोणावळा, खंडाळा, आंबा, आणि अलिबाग यांसारख्या ठिकाणांना
          प्रॉपर्टी गुंतवणुकीसाठी मोठी मागणी होती. आता मात्र, हाच ट्रेंड
          कोकणाच्या दिशेने वळत आहे. कोकणात मालमत्ता खरेदीसाठी मागणी प्रचंड वाढली
          आहे, विशेषतः ज्या ठिकाणांना हायवे आणि रेल्वे कनेक्टिव्हिटी चांगली आहे
          तिथे. मुंबई आणि पुण्यातील लोक मोठ्या प्रमाणावर गुंतवणूक करत आहेत.
          कारण, महानगरांमध्ये राहणाऱ्या लोकांना महिन्यातून किमान एकदा तरी आपल्या
          कुटुंबासोबत निसर्गाच्या सानिध्यात वेळ घालवायचा असतो.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              कोकणात सेकंड होम घेण्याचे फायदे
            </h3>
            <ul className="list-disc ml-6">
              <li className="text-base md:text-lg leading-relaxed">
                <strong>प्राकृतिक सौंदर्याचा आस्वाद:</strong> कोकणातील प्रत्येक
                ठिकाण म्हणजे निसर्गाचा एक नवा आविष्कार! येथे राहिल्यावर मनःशांती
                लाभते आणि एक अनोखी ताजेतवानेपणाची भावना निर्माण होते.
              </li>
              <li className="text-base md:text-lg leading-relaxed">
                <strong>महानगरांच्या जवळीकतेचा लाभ:</strong> मुंबई, पुणे, आणि
                ठाण्यापासून काही तासांच्या अंतरावर असलेले कोकणातील बरेचशी ठिकाणे
                सुट्टीसाठी अगदी योग्य आहेत, त्यामुळे दर विकेंडला निसर्गाच्या
                सानिध्यात सुट्टीचा आनंद घेणे सोपे झाले आहे.
              </li>
              <li className="text-base md:text-lg leading-relaxed">
                <strong>शांतता आणि मानसिक समाधान:</strong> शहरातील गोंगाट आणि
                प्रदूषणापासून दूर, कोकणातील शांत वातावरणात राहणे मानसिक आणि
                शारीरिक स्वास्थ्यासाठी उपयुक्त आहे.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              सरकारी नोकरदारांसाठी आकर्षण
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              सरकारी नोकरदारांचा पाच दिवसांचा आठवडा असल्याने, त्यांना
              शनिवार-रविवार सुट्ट्यांमध्ये आपल्या कुटुंबासोबत निवांत वेळ
              घालवण्याची संधी मिळते. त्यामुळे, आता सरकारी नोकरदारदेखील कोकणातील
              सेकंड होम खरेदीला प्राधान्य देत आहेत.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              भविष्यातील निवृत्तीसाठी एक निवांत निवासस्थान
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              भविष्यात सेवानिवृत्तीनंतर शांत आणि निसर्गरम्य ठिकाणी राहण्यासाठी
              कोकणात घर घेण्याचा विचार केला जातो. त्यामुळेच, सध्या कोकणातील
              मालमत्ता खरेदीत मोठ्या प्रमाणावर वाढ दिसून येत आहे.
            </p>
          </div>
        </div>

        <p className="text-center text-[#27563A]  text-base md:text-lg italic mt-4">
          "परफेक्ट सेकंड होम : सुट्टीतल्या रोजच्या गर्दी पासून दूर, एकटेपणा,
          वाऱ्याचा आवाज, वेळेचं बंधन नाही, शून्य विचारातलं मन, स्थिर जग आणि
          हातात कॉफीचा मग! परफेक्ट सेकंड होम 👍🏻"
        </p>
      </div>
      {/* 5th */}
      <div className=" p-6 md:p-8 bg-[#E4E5DF] lg:p-10 text-[#313131] space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#27563A] border-l-8 border-[#27563A] p-2 font-bold text-left">
          लांजा: मध्य कोकणातील एक विहंगम तालुका
        </h1>

        <p className="text-base md:text-lg leading-relaxed">
          मुंबई-गोवा महामार्गावर वसलेला लांजा तालुका, एक निसर्गसंपन्न ठिकाण आहे.
          सध्या मुंबई-गोवा महामार्गावर चौपदरीकरणाचे काम सुरू आहे. 2025 पर्यंत हा
          महामार्ग पूर्णपणे चौपदरी होणार असून, त्यानंतर पनवेलहून लांजापर्यंतचे
          अंतर फक्त साडेचार तासांत पूर्ण होईल.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              लांजा तालुक्याचे विशेष वैशिष्ट्ये
            </h3>
            <ul className="list-disc ml-6">
              <li className="text-base md:text-lg leading-relaxed">
                प्रदूषण चाचणीत कोकणातील पाच जिल्ह्यांमध्ये अव्वल स्थानी आलेला
                तालुका, शुद्ध हवा आणि पाण्यामुळे ओळखला जातो.
              </li>
              <li className="text-base md:text-lg leading-relaxed">
                ८ धरणं आणि अनेक बंधारे असलेला तालुका, ज्या ठिकाणी मुबलक पाण्याची
                पातळी आहे. फळबागांना पूरक अशा धरणांमध्ये बेनी, बेर्डेवाडी,
                पन्हळे, खोरनिनको, झापडे, शिपोशी, गवाणे, आणि कुवे यांचा समावेश
                आहे.
              </li>
              <li className="text-base md:text-lg leading-relaxed">
                भरपूर जंगल, वनसंपदा, भाजीपाला, करवंद, बोरं, रातांबा, फणस, आणि
                इतर फळांची उपलब्धता आहे.
              </li>
              <li className="text-base md:text-lg leading-relaxed">
                कोकणातील सर्वाधिक काजू उत्पादन, जे आकार आणि चवीमुळे निर्यातीसाठी
                प्रसिद्ध आहे.
              </li>
              <li className="text-base md:text-lg leading-relaxed">
                हापूस आंबा उत्पादनात लांजा अग्रस्थानी असून, हजारोंच्या वर
                आंब्याच्या बागा आहेत, ज्यात रसायन विरहित पद्धतीने उत्पादन करणारे
                शेतकरीही आहेत.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              हवामान आणि पर्यटन स्थळे
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              लांजाचे हवामान सर्वसाधारणपणे किमान १४°C आणि कमाल ३४°C आहे, तर
              समुद्र सपाटीपासून उंची सुमारे १६६ मीटर आहे. या तालुक्याच्या एक ते
              दीड तासाच्या अंतरावर गणपतीपुळे, गणेशगुळे, पावस, आंबाघाट,
              संगमेश्वर, मार्लेश्वर, खोरनिनको येथील बल्लाळ गणेश, आडिवरेतील
              महाकाली, कोट येथील झाशीची राणी लक्ष्मीबाई यांचे स्मारक, आणि
              चांदोली अभयारण्य हे पर्यटन स्थळे आहेत.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">गुंतवणूक संधी</h3>
            <p className="text-base md:text-lg leading-relaxed">
              माचाळ येथे नवीन हिल स्टेशन निर्माण झाले आहे. जागा, शेतजमीन, आणि
              N.A. Plots यासाठी गुंतवणुकीसाठी लांजा तालुका अत्यंत उपयुक्त आहे.
              याशिवाय, तालुक्यात निवसर, आडवली, वेरवली, आणि विलवडे असे चार
              रेल्वेस्टेशन्स आहेत, आणि सर्व वाड्यांचे विद्युतीकरण, तसेच अंतर्गत
              डांबरी रस्त्यांची सोय आहे.
            </p>
          </div>
        </div>

        <p className="text-center text-[#27563A] text-base md:text-lg italic mt-4">
          "लांजा: निसर्गाची कुशी आणि एक अनोखा अनुभव, गुंतवणुकीसाठी आदर्श ठिकाण!"
        </p>
      </div>
      {/* 6th*/}
      <div className="bg-white p-6 md:p-8 lg:p-10 text-[#313131] space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#27563A] border-l-8 border-[#27563A] p-2 font-bold text-left">
          मुंबई-गोवा हायवे (NH-66) पूर्ण झाल्यानंतर लांजाला मिळणारे फायदे
        </h1>

        <p className="text-base md:text-lg leading-relaxed">
          मुंबई-गोवा हायवे (NH-66) पूर्ण झाल्यानंतर लांजा आणि कोकण क्षेत्राला
          अनेक फायदे होऊ शकतात. हा महामार्ग स्थानिक अर्थव्यवस्थेला, पर्यटन,
          व्यवसाय, आणि जीवनमान सुधारण्यासाठी एक महत्त्वपूर्ण घटक ठरेल.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              1. प्रवासाचा वेळ कमी होईल
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              महामार्गामुळे मुंबई, पुणे, गोवा आणि इतर मोठ्या शहरांपासून लांजा
              आणि कोकणाचा प्रवास जलद आणि सोपा होईल. कारने प्रवास करणारी व्यक्ती
              सुमारे 6 तासात मुंबईहून लांजाला पोहोचू शकतील.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              2. पर्यटनाचा विकास
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              हायवे सान्निध्यामुळे लांजा आणि परिसरातील सुंदर स्थळे अधिक लोकांना
              आकर्षित करू शकतात, ज्यामुळे स्थानिक पर्यटनाचा विकास होईल.
              लांजापासून तासा-दिडतासाच्या अंतरावर २५ ते ३० आकर्षक स्थळे आहेत.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              3. व्यवसाय आणि गुंतवणूक संधी
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              महामार्गामुळे वाहतुकीचा मार्ग सोपा झाल्यामुळे विविध उद्योग,
              हॉटेल्स, रेस्टॉरंट्स, आणि रिटेल व्यवसायांना चांगला फायदा मिळू
              शकतो. यामुळे नवीन गुंतवणूकदार आकर्षित होण्याची संधी मिळेल.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              4. स्थानीय रोजगार निर्मिती
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              नवीन उद्योग आणि व्यवसाय सुरू झाल्यामुळे स्थानिक लोकांसाठी
              रोजगाराच्या संधी वाढतील, विशेषतः बांधकाम, वाहतूक आणि पर्यटन
              क्षेत्रात रोजगाराच्या भरपूर संधी निर्माण होऊ शकतात.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              5. आवश्यक सुविधा आणि सेवा अधिक सहज उपलब्ध
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              महामार्गामुळे शिक्षण, वैद्यकीय सुविधा, आणि आपत्कालीन सेवा अधिक सहज
              उपलब्ध होतील, ज्यामुळे लोकांच्या जीवनाची गुणवत्ता सुधारेल.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              6. गावातील मालमत्तेची किंमत वाढणे
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              रस्त्यांची चांगली सोय असल्यामुळे लांजा आणि आसपासच्या क्षेत्रांतील
              जमीन आणि इतर मालमत्तांची मागणी वाढेल, आणि त्यांची किंमत वाढू शकते.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              7. संपर्क सुविधा सुधारणा
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              महामार्गामुळे ग्रामीण आणि शहरी भागांमधील संपर्क सुधारेल, ज्यामुळे
              लांजा एक महत्त्वाचे स्थान बनू शकेल.
            </p>
          </div>
        </div>

        <p className="text-center text-base text-[#27563A] md:text-lg italic mt-4">
          "लांजा आणि त्याचा परिसर, हायवेच्या माध्यमातून नवीन ऊर्जा घेऊन समृद्ध
          होण्याची शक्यता!"
        </p>
      </div>
      {/* 7th */}
      <div className="bg-[#E4E5DF] p-6 md:p-8 lg:p-10 text-[#313131] space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#27563A] border-l-8 border-[#27563A] p-2 font-bold text-left">
          लांजाला यायचे कसे?
        </h1>

        <p className="text-base md:text-lg leading-relaxed">
          लांजाला पोहोचण्यासाठी विविध मार्ग आहेत. पुणे, मुंबई, आणि
          कोल्हापूरपासून लांजाच्या अंतराने आणि मार्गाने प्रवास करता येतो.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              पुण्यापासून– 280 की.मी.
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              पुणे–सातारा–कराड–कोकरूड–मलकापूर–आंबाघाट–साखरपा–आसगे–लांजा.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              मुंबईपासून–सध्या 380 की.मी. (भविष्यात सुमारे 320 की.मी.)
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              पनवेल–महाड–चिपळूण–संगमेश्वर–हातखंबा–पाली–लांजा.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              कोल्हापूरपासून– 100 की.मी.
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              कोल्हापूर–बांबवडे–मलकापूर–आंबाघाट–साखरपा–आसगे–लांजा.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
