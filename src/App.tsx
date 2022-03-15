/** @jsxImportSource @emotion/react */
import React,{useState} from 'react';
import { css } from '@emotion/react'
import {ToggleButton, ToggleButtonGroup, Accordion, AccordionDetails, AccordionSummary} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';

interface RowLocationProps{
  location:string;
  time:string;
}

interface RowLocationAccordionProps extends RowLocationProps{
  title:string;
  description:string;
  image?:string;
}

const App:React.VFC=()=>{
  const [alignment, setAlignment]=useState<string>("day1")
  const [scheduleComponent, setScheduleComponent]=useState<React.VFC>()

  const logoImage=css`
    width:100%;
    max-width:1920px;
  `

  const arrow=css`
    text-align:center;
  `

  const scheduleToggle=css`
    margin:5% auto;
    text-align:center;
  `

  const scheduleButton=css`
    font-size:1.3rem;
  `

  const locationTitle=css`
    text-align:center;
    margin:auto;
    white-space: pre-wrap;
  `

  const description=css`
    white-space: pre-wrap;
  `

  const descriptionImage=css`
    width:100%;
  `

  const Day1:React.VFC=()=>{
    return(
      <div>
        <RowLocation
          time={"06:00"}
          location={"東名阪 名古屋西IC"}
        />
        <RowArrow/>
        <RowLocationAccordion
          time={"06:40"}
          location={"土山SA 休憩"}
          title={"セブンイレブンしかない"}
          description={"昼食が少し遅めになるので、ここで少し食べておきましょう"}
          image={`${process.env.PUBLIC_URL}/tsuchiyamaSA.jpg`}
        />
        <RowLocation
          time={"07:15"}
          location={"土山SA 出発"}
        />
        <RowArrow/>
        <RowLocationAccordion
          time={"10:00"}
          location={"渦の道見学"}
          title={"世界最大級！鳴門の渦潮"}
          description={`鳴門の渦潮は、瀬戸内海と紀伊水道の干満差により、激しい潮流が発生することによりできる「自然現象」です。\n
春と秋の大潮時に最大となり、直径20mにも達する渦潮の大きさは世界一といわれています。\n
1日のうちで潮流が最速となる時間帯に最も迫力ある渦潮が発生し、潮の流れない時間帯には渦潮を見ることはできません。`}
          image={`${process.env.PUBLIC_URL}/narutoUzusio.jpg`}
        />
        <RowArrow/>
        <RowLocationAccordion
          time={"13:00"}
          location={"ホテル 土佐御苑"}
          title={"高知市街すぐ近く！\n真心こめた美食の老舗宿"}
          description={""}
          image={`${process.env.PUBLIC_URL}/tosagyoen.jpg`}
        />
        <RowArrow/>
        <RowLocationAccordion
          time={"13:30"}
          location={"ひろめ市場"}
          title={"酒飲みたちのパラダイス！\n地元客と観光客がやんややんやと杯交わす"}
          description={`土佐藩家老の屋敷跡付近にあり、屋敷が消えた維新後もその一帯は親しみを込めて「弘人屋敷（ひろめやしき）」と呼ばれていたことから、その名をとり「ひろめ市場」と名づけられました。\n
ひろめ市場の中は「お城下広場」や「龍馬通り」など7ブロックからなり、鮮魚店や精肉店、雑貨・洋服屋、飲食店など、個性的なお店が集まっています。\n
市場内の至る所にテーブルと椅子が並べられていて、それぞれ自分の好きなものを、好きなお店で買ってきて、持ち寄って食べるスタイルとなってます。\n
なので市場内のほとんどの飲食店にはテーブルがありません。食事後は食器をまとめておけばスタッフがすべて回収してくれます。食べる・買う・見る・遊ぶ…と、楽しみ方は無限大。自分に合わせた楽しみ方ができます。`}
          image={`${process.env.PUBLIC_URL}/hirome.jpg`}
        />
        <RowLocationAccordion
          time={"15:00"}
          location={"高知城"}
          title={"南海道随一の名城"}
          description={`関ヶ原の戦いの功績により徳川家康から土佐一国を拝領した山内一豊は、慶長6年（1601）大高坂山に新城の築城工事を始め、慶長8年（1603）に本丸と二ノ丸が完成、入城しました。\n
享保12年（1727）城下町の大火で追手門以外の城郭のほとんどを焼失しましたが、宝暦3年（1753）までに創建当時の姿のまま再建されました。`}
          image={`${process.env.PUBLIC_URL}/kochiCastle.jpg`}
        />
        <RowArrow/>
        <RowLocationAccordion
          time={"17:00"}
          location={"夕食"}
          title={"土佐料理の横綱・鰹\n本場の味は違うぜよ！"}
          description={`「目に青葉　山ほととぎす　初鰹」で知られる春の「初鰹」は香りと切れ味が魅力。\n
一方、黒潮をめぐりエサをたっぷりと食べて成長した秋の「戻り鰹」は、脂をたっぷり蓄えた、とろりとした食感を楽しむことができます。\n
高知と言えば「鰹のタタキ」をイメージされる方も多いはず。そのイメージ通り、高知の繁華街ではタタキを名物にした飲食店が軒を連ねています。\n
一般的な食べ方といえば、皮目をパリッと焼いて分厚く切った鰹に、玉ねぎ、ミョウガ、大葉の薬味をたっぷりと乗せ、チリ酢（土佐酢）をかけてスライスニンニクとともに楽しむ味わい方です。\n
薬味やタレを身にまぶした後、手で軽く叩くため「タタキ」と言われています。`}
          image={`${process.env.PUBLIC_URL}/katsuo.jpg`}
        />
        <RowArrow/>
        <RowLocationAccordion
          time={"22:00"}
          location={"味噌かつラーメン 豚太郎"}
          title={"高知県民のソウルフード！\n味噌ラーメンにカツが乗った超がっつり系"}
          description={`到着してひと目、丼の半分を占める面積の豚カツが目に飛び込んできます。これは、みそかつがラーメンに乗っているのではなく、味噌ラーメンにトンカツが乗っているラーメンだ！\n
味噌ラーメンとしては、ゆで卵・茹でたもやし・メンマ・ネギなどおなじみの具材が入っています。もやしはちょっとした二郎系のようなボリューム感がありました。\n
スープの染み渡ったカツを食べると、これもトンカツにかけるソースに比べたら、ずいぶんあっさりした印象を受けます。\n
しかしながら、味噌ラーメンとカツというペアリングとしては十分な味わいでした。`}
          image={`${process.env.PUBLIC_URL}/misokatsuRamen.jpg`}
        />
      </div>
    )
  }

  const Day2:React.VFC=()=>{
    return(
      <div>
        <RowLocation
          time={"09:00"}
          location={"土佐御苑発"}
        />
        <RowArrow/>
        <RowLocationAccordion
          time={"10:00"}
          location={"桂浜"}
          title={"龍馬像の立つ桂浜\n日本の夜明けぜよ！"}
          description={`桂浜は、高知県を代表する景勝地の一つ。古くから月の名所として知られ、高知の唄「よさこい節」にもその情景が歌詞として残っています。\n
弓状にひろがる海岸で松の緑と紺碧の海が調和する見事な景勝地で高知の英雄・坂本龍馬の銅像があり、太平洋の荒波に向かって、まなざしを向けている像はとても有名です。\n
龍馬について知りたい場合は、近くに「龍馬坂本龍馬記念館」があるので合わせて楽しむことができます。\n
海浜一帯は「桂浜公園」となっていて、公園内には売店もあります。`}
          image={`${process.env.PUBLIC_URL}/katsurahama.jpg`}
        />
        <RowLocation
          time={"10:30"}
          location={"桂浜発"}
        />
        <RowArrow/>
        <RowLocationAccordion
          time={"12:30"}
          location={"四万十屋"}
          title={"日本最後の清流を見ながら\n天然うなぎを食べる"}
          description={`四万十屋は、1967年の開業以来、四万十の自然や川漁師と共に生活し、四万十の本物の味を守り、現在へとつなげてきました。\n
日本最後の清流と呼ばれる四万十川のほとりで、ここでしか味わえない四万十の食文化をお楽しみください。`}
          image={`${process.env.PUBLIC_URL}/unagi.jpg`}
        />
        <RowLocation
          time={"13:45"}
          location={"出発"}
        />
        <RowArrow/>
        <RowLocationAccordion
          time={"15:00"}
          location={"紫電改展示館"}
          title={"日本唯一の現存機！\n日本海軍最優秀機「紫電改」"}
          description={`「紫電」の性能がテスト段階で期待を大きく下回ったことから、川西航空機は海軍に根本的な再設計を提案し、１９４３（昭和１８）年３月に開発作業をスタートさせた。\n
主翼を低翼配置にして、故障が多かった伸縮式の主脚を標準タイプに変更、胴体断面も細く、垂直尾翼の形状も変えるなど、空力的な合理性を追求した。\n
試作機は４４（昭和１９）年１月に完成、テストの結果、紫電の問題点はほぼ解消され、「誉」エンジンがスペック通りの実力を出せば、最高速力が時速６３０キロに達するだけでなく、運動性、上昇力も格段に向上した高性能機に生まれ変わったことが明らかになった。海軍もその結果に満足し、「紫電改」として量産を命じた。\n
しかし、戦局が急速に悪化する中で生産ラインを整えるのに時間が掛かり、何とか量産体制が整ったのは４５（昭和２０）年に入ってからで、ようやく実戦部隊に配備されたのは同年２月だった。\n
実戦では期待通りの性能を発揮し、その月に横須賀基地に配備された紫電改が単機で１２機の米軍Ｆ６Ｆと渡り合い、うち４機を撃墜したほか、翌月には部隊ごと紫電改に改編された松山基地の第３４３航空隊が、米艦載機部隊との遭遇戦で１日に５２機を撃墜するといった大戦果を上げた。
海軍では零戦の後継となる主力戦闘機として１万機以上の大量生産を計画したが、米軍の空襲で工場が機能せず、４００機あまりを生産したところで終戦を迎えた。なお、「紫電改」は試作機としての通称で、制式名称は紫電二一型。機体をさらに改良した三一型、エンジンを換装した三二型なども少数製造された。\n
また、艦上機型も試作されたものの、既に日本の空母機動部隊は壊滅しており、量産はされなかった。\n
旧日本軍において米軍機に対抗しうる数少ない機体。`}
          image={`${process.env.PUBLIC_URL}/shidenKai.jpg`}
        />
        <RowArrow/>
        <RowLocationAccordion
          time={"17:30"}
          location={"ホテル椿舘"}
          title={"日本最古湯の一つ！\n夏目漱石も愛した温泉"}
          description={`アルカリ性単純泉の湯質は、きめ細やかな日本人の肌にピッタリのなめらかなお湯で、湯治や美容に適しています。聖徳太子から夏目漱石、正岡子規など多くの文人墨客（ぶんじんぼっかく）が訪れ、源泉29本のうち、現在でも19本が愛媛県に登録されています。\n
のうち1本は施設老朽化のため休止していますが、残りの18本で温泉を汲み上げています。\n
泉温は最も低いもので20℃、最も高いもので55℃程度です。\n
また、各源泉から地中に埋設した送湯管で、4ヶ所の分湯場に集めたお湯を、道後温泉本館・椿の湯、周辺のホテル・旅館へ配湯しています。`}
          image={`${process.env.PUBLIC_URL}/dougoOnsen.jpg`}
        />
      </div>
    )
  }



  const Day3:React.VFC=()=>{
    return(
      <div>
        <RowLocation
          time={"09:00"}
          location={"ホテル椿舘 出発"}
        />
        <RowArrow/>
        <RowLocationAccordion
          time={"11:00"}
          location={"うどん おか泉"}
          title={"日本一のうどん！\n讃岐うどん"}
          description={`香川県綾歌郡宇多津町にある手打ちうどん店で、TV番組や旅行雑誌でも多数紹介されている有名店。\n
県内外から多くのファンが訪れ、長い行列ができることでも知られている。\n
「うどんは鍛え育てるもの」という信念のもと、絶妙な力加減で踏み鍛えた自慢のうどんは、ツヤがありしなやかで、強いコシが感じられる逸品。\n
看板メニューの「ひや天おろし」は、巨大なエビ天が2本も載ったボリューム満点の1杯である。お土産うどんの販売もあり。`}
          image={`${process.env.PUBLIC_URL}/udon.jpg`}
        />
      </div>
    )
  }

  const schedules:{[key:string]:React.VFC}={"day1":Day1, "day2":Day2, "day3":Day3}

  const RowLocation=(props:RowLocationProps)=>{
    return (
      <Accordion disabled css={css`background-color:rgba(255,255,255,1)!important;color:rgba(0,0,0,1)!important;`}>
        <AccordionSummary css={css`opacity:1!important;`}>
          <p>{props.time}</p>
          <p css={locationTitle}>{props.location}</p>
        </AccordionSummary>
      </Accordion>
    )
  }

  const RowArrow=()=>{
    return (
      <p css={arrow}>↓</p>
    )
  }

  const RowLocationAccordion=(props:RowLocationAccordionProps)=>{
    return(
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <p>{props.time}</p>
          <p css={locationTitle}>{props.location}</p>
        </AccordionSummary>
        <AccordionDetails>
          <h2 css={locationTitle}>{props.title}</h2>
          {props.image?<img src={props.image} css={descriptionImage} alt=""/>:""}
          <p css={description}>{props.description}</p>
        </AccordionDetails>
      </Accordion>
    )
  }

  const handleChange=(event:any, newAlignment:any)=>{
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }

  useEffect(()=>{
    setScheduleComponent(schedules[alignment])
  },[alignment])

  return (
    <div className="App">
      <img css={logoImage} src={`${process.env.PUBLIC_URL}/shikokuTravelLogo.png`} alt="四国旅行ロゴ" />
      <div css={scheduleToggle}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton css={scheduleButton} value="day1" selected={!alignment||alignment==="day1"?true:false}>1日目</ToggleButton>
          <ToggleButton css={scheduleButton} value="day2">2日目</ToggleButton>
          <ToggleButton css={scheduleButton} value="day3">3日目</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {scheduleComponent}
    </div>
  );
}

export default App;
