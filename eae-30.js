const data = [
  {
   timeID: 5,
   okltypeID:2,
   cableID:2,
   TuID:1,
   name: '«ЕАЕ ЭЛЕКТРИК Е30» ТУ-3565-002-53930360-2008'
  },
  {
   timeID: 4,
   okltypeID:1,
   cableID:2,
   TuID:2,
   name: '«ЕАЕ elektrik Е60» ТУ-3565-002-53930360-2008'
  },
  {
   timeID: 3,
   okltypeID:2,
   cableID:2,
   TuID:3,
   name: '«ЕАЕ elektrik Е60» ТУ-3565-002-53930360-2008'
  },
 {
   timeID: 2,
   okltypeID:1,
   cableID:2,
   TuID:4,
   name: '«ЕАЕ elektrik Е90» ТУ-3565-002-53930360-2008'
  },
  {
   timeID: 2,
   okltypeID:2,
   cableID:2,
   TuID:5,
   name: '«ЕАЕ elektrik Е90» ТУ-3565-002-53930360-2008'
  },
  {
   timeID: 3,
   okltypeID:2,
   cableID:3,
   TuID:10,
   name: '«ЕАЕ elektrik Е30» ТУ 3581-006-53930360-2010'
  },
  {
   timeID: 3,
   okltypeID:1,
   cableID:3,
   TuID:11,
   name: '«ЕАЕ elektrik Е60» ТУ 3581-006-53930360-2010'
  },
  {
   timeID: 3,
   okltypeID:2,
   cableID:3,
   TuID:12,
   name: '«ЕАЕ elektrik Е60» ТУ 3581-006-53930360-2010'
  },
  {
   timeID: 2,
   okltypeID:1,
   cableID:5,
   TuID:13,
   name: '«ЕАЕ elektrik Е90» ТУ 3581-006-53930360-2010'
  },
  {
    timeID: 2,
    okltypeID:2,
    cableID:5,
    TuID:13,
    name: '«ЕАЕ elektrik Е90» ТУ 3581-006-53930360-2010'
  },
   {
    timeID: 1,
    okltypeID:1,
    cableID:7,
    TuID:14,
    name: '«ЕАЕ elektrik Е60» ТУ 16.К71-339-2004'
   },
   {
    timeID: 1,
    okltypeID:1,
    cableID:7,
    TuID:14,
    name: '«ЕАЕ elektrik Е60» ТУ 16.К71-339-2004'
   },
   {
    timeID: 1,
    okltypeID:1,
    cableID:7,
    TuID:14,
    name: '«ЕАЕ elektrik Е90» ТУ 16.К71-339-2004'
   },
]

const times = [{ timeID: 1, name:'Е90 (90 мин)'},{ timeID: 2, name:'Е60 (60 мин)'}, { timeID: 3, name:'Е45 (45 мин)'},{ timeID: 4, name:'Е30 (30 мин)'},{ timeID: 5, name:'Е15 (15 мин)'}]
const okltypes = [{ okltypeID: 1, name:'Кабельные лотки', fullname:'<h5>Прокладка в кабельных лотках</h5>', oklsostav:'<p>Состав Окл:</p><ul><li>Огнестойкие металлические кабельные лотки и крышки к ним</li><li>Огнестойкие кабельросты и крышки к ним</li><li>Угловые поворотные модули и крышки к ним</li><li>Элементы крепления и соединители</li><li>Аксессуары и огнестойкие крепежные элементы</li><li>Коробки распределительные огнестойкие без галогена (изготовитель ООО «КРОСС ЛИНК»)</li><li>Огнестойкие распаечные (соединительные) коробки серии «РО» (изготовитель АО «КОПОС КОЛИН»)</li><li>Огнестойкие распаечные (соединительные) коробки серии «КМО» (изготовитель ГК «Гефест», ООО «Форносовский литейно-механический завод»)</li><li>Кабельная продукция СПКБ ТЕХНО</li></ul>'},{ okltypeID: 2, name:'Электромонтажные трубы', fullname:'<h5>Прокладка в электромонтажных трубах</h5>', oklsostav:'<p>Состав Окл:</p><ul><li>Трубы гибкие гофрированные из электроизоляционного материала</li><li>Трубы пластиковые гладкие из электроизоляционного материала</li><li>Элементы крепления и соединители</li><li>Аксессуары и огнестойкие крепежные элементы</li><li>Коробки распределительные огнестойкие без галогена (изготовитель ООО «КРОСС ЛИНК»)</li><li>Огнестойкие распаечные (соединительные) коробки серии «РО» (изготовитель АО «КОПОС КОЛИН»)</li><li>Огнестойкие распаечные (соединительные) коробки серии «КМО» (изготовитель ГК «Гефест», ООО «Форносовский литейно-механический завод»)</li><li>Кабельная продукция СПКБ ТЕХНО</li></ul>'}, { okltypeID: 3, name:'Открытая прокладка', fullname:'<h5>Открытая прокладка</h5>', oklsostav:'<p>Состав Окл:</p><ul><li>Угловые поворотные модули и крышки к ним</li><li>Элементы крепления и соединители</li><li>Аксессуары и огнестойкие крепежные элементы</li><li>Коробки распределительные огнестойкие без галогена (изготовитель ООО «КРОСС ЛИНК»)</li><li>Огнестойкие распаечные (соединительные) коробки серии «РО» (изготовитель АО «КОПОС КОЛИН»)</li><li>Огнестойкие распаечные (соединительные) коробки серии «КМО» (изготовитель ГК «Гефест», ООО «Форносовский литейно-механический завод»)</li><li>Кабельная продукция СПКБ ТЕХНО</li></ul>'}]

const cables = [{ cableID: 1, name:'КВнг(А)-FRLSLTx - U, КВнг(А)-FRLS - U...', fullname:'В данную ОКЛ входят следующие марки кабелей: КВнг(А)-FRLSLTx - U, КВнг(А)-FRLS - U, КРГЭКГнг(А)-FRHF - U, КРГЭнг(А)-FRHF - U, КРЭКРнг(А)-FRHF - U, КПЭКПнг(А)-FRHF - U, КРКРнг(А)-FRHF - U, КПКПнг(А)-FRHF - U, КРЭКГнг(А)-FRHF - U, КПЭКГнг(А)-FRHF - U, КРКГнг(А)-FRHF - U, КПКГнг(А)-FRHF - U, КРЭнг(А)-FRHF - U, КПЭнг(А)-FRHF - U, КРнг(А)-FRHF - U, КПнг(А)-FRHF - U, КВЭКВнг(А)-FRLSLTx - U, КВЭКВнг(А)-FRLS - U, КВКВнг(А)-FRLSLTx - U, КВКВнг(А)-FRLS - U, КВЭКГнг(А)-FRLSLTx - U, КВЭКГнг(А)-FRLS - U, КВКГнг(А)-FRLSLTx - U, КВКГнг(А)-FRLS - U, КВЭнг(А)-FRLSLTx - U, КРГнг(А)-FRHF - U, КРГКГнг(А)-FRHF - U, КРГКРнг(А)-FRHF - U, КПГЭКГнг(А)-FRHF - U, КВГЭКВнг(А)-FRLSLTx - U, КВГЭКВнг(А)-FRLS - U, КВГКВнг(А)-FRLSLTx - U, КВГЭКГнг(А)-FRLSLTx - U, КВГЭКГнг(А)-FRLS - U, КВГКГнг(А)-FRLSLTx - U, КВГКГнг(А)-FRLS - U, КВГЭнг(А)-FRLSLTx - U, КВГЭнг(А)-FRLS - U, КВГнг(А)-FRLSLTx - U, КВГнг(А)-FRLS - U, КВЭнг(А)-FRLS - U, КВГКВнг(А)-FRLS - U, КПГнг(А)-FRHF - U, КПГКПнг(А)-FRHF - U'},{ cableID: 2, name: 'КПКЭВнг(А)-FRLS, КПГКЭПКПнг(А)-FRHF, КПГКПКПнг(А)-FRHF', fullname:'В данную ОКЛ входят следующие марки кабелей: КПКЭВнг(А)-FRLS, КПГКЭПКПнг(А)-FRHF, КПГКПКПнг(А)-FRHF, КПГКЭПКГнг(А)-FRHF, КПГКЭВКГнг(А)-FRLS, КПГКПКГнг(А)-FRHF, КПГКВКГнг(А)-FRLS, КПГКЭПнг(А)-FRHF, КПГКПнг(А)-FRHF, КПКЭПКПнг(А)-FRHF, КПКЭВКВнг(А)-FRLS, КПКПКПнг(А)-FRHF, КПКВКВнг(А)-FRLS, КПКЭПКГнг(А)-FRHF, КПКЭВКГнг(А)-FRLS, КПКПКГнг(А)-FRHF, КПКВКГнг(А)-FRLS, КПКЭПнг(А)-FRHF, КПКПнг(А)-FRHF, КПГКЭВКГнг(А)-FRLSLTx, КПГКЭВнг(А)-FRLSLTx, КПКВКГнг(А)-FRLSLTx, КПГКЭВКВнг(А)-FRLSLTx, КПГКЭВКВнг(А)-FRLS, КПГКВКВнг(А)-FRLSLTx, КПГКВКВнг(А)-FRLS, КПГКВКГнг(А)-FRLSLTx, КПГКЭВнг(А)-FRLS, КПГКВнг(А)-FRLSLTx, КПГКВнг(А)-FRLS, КПКЭВКВнг(А)-FRLSLTx, КПКВКВнг(А)-FRLSLTx, КПКЭВКГнг(А)-FRLSLTx, КПКЭВнг(А)-FRLSLTx, КПКВнг(А)-FRLSLTx, КПКВнг(А)-FRLS'}, { cableID: 3, name:'КПСнг(А)-FRHF, КПСнг(А)-FRLS, КПСЭСнг(А)-FRHF', fullname:'В данную ОКЛ входят следующие марки кабелей: КПСнг(А)-FRHF, КПСнг(А)-FRLS, КПСЭСнг(А)-FRHF, КПСЭСнг(А)-FRLS, КПСЭнг(А)-FRHF, КПСЭнг(А)-FRLS, КПССнг(А)-FRHF, КПССнг(А)-FRLS'},{ cableID: 4, name:'СП-ОКВнг(А)-FRHF, СП-ОКСнг(А)-FRHF, СП-ОКБнг(А)-FRHF'},{ cableID: 5, name:'ТЕХНОКИМ'},{ cableID: 6, name:'ТЕХНОКСБКнг(А)-FRHF, ТЕХНОКСБнг(А)-FRHF...', fullname:'В данную ОКЛ входят следующие марки кабелей:  ТЕХНОКСБКнг(А)-FRHF, ТЕХНОКСБнг(А)-FRHF, ТЕХНОКСБнг(А)-FRLS, ТЕХНОКСБКнг(А)-FRLS, ТЕХНОКСБСКнг(А)-FRHF, ТЕХНОКСБКГнг(А)-FRHF, ТЕХНОКСБСнг(А)-FRHF, ТЕХНОКСБнг(А)-FRHF-ХЛ, ТЕХНОКСБСКнг(А)-FRLS, ТЕХНОКСБКнг(А)-FRLSLTx, ТЕХНОКСБСКГнг(А)-FRLSLTx, ТЕХНОКСБСКГнг(А)-FRLS, ТЕХНОКСБКГнг(А)-FRLSLTx, ТЕХНОКСБКГнг(А)-FRLS, ТЕХНОКСБCнг(А)-FRLS, ТЕХНОКСБнг(А)-FRLSLTx, ТЕХНОКСБГСКГнг(А)-FRHF-МС, ТЕХНОКСБГКГнг(А)-FRHF-МС, ТЕХНОКСБСКГнг(А)-FRHF-МС, ТЕХНОКСБКГнг(А)-FRHF-МС, ТЕХНОКСБГКГнг(А)-FRLSLTx, ТЕХНОКСБГКГнг(А)-FRLS, ТЕХНОКСБГСКнг(А)-FRHF-ХЛ, ТЕХНОКСБГКнг(А)-FRHF-ХЛ, ТЕХНОКСБГСКГнг(А)-FRHF-ХЛ, ТЕХНОКСБГСКГнг(А)-FRHF, ТЕХНОКСБГКГнг(А)-FRHF-ХЛ, ТЕХНОКСБГКГнг(А)-FRHF, ТЕХНОКСБГСнг(А)-FRHF-ХЛ, ТЕХНОКСБГнг(А)-FRHF-ХЛ, ТЕХНОКСБГнг(А)-FRHF, ТЕХНОКСБГCнг(А)-FRLS, ТЕХНОКСБСКнг(А)-FRHF-ХЛ, ТЕХНОКСБКнг(А)-FRHF-ХЛ, ТЕХНОКСБСКГнг(А)-FRHF-ХЛ, ТЕХНОКСБСКГнг(А)-FRHF, ТЕХНОКСБСнг(А)-FRHF-ХЛ, ТЕХНОКСБКГнг(А)-FRHF-ХЛ, ТЕХНОКСБСнг(А)-FRHF-МС, ТЕХНОКСБГСнг(А)-FRHF-МС, ТЕХНОКСБКГнг(А)-FRLS-ХЛ, ТЕХНОКСБГСКнг(А)-FRLSLTx, ТЕХНОКСБГКнг(А)-FRLSLTx, ТЕХНОКСБГСКнг(А)-FRHF-МС'},{ cableID: 7, name:'КППГЭнг(А)-FRHF, КППГнг(А)-FRHF, ВВГЭнг(А)-FRLS - U...', fullname:'В данную ОКЛ входят следующие марки кабелей: КППГЭнг(А)-FRHF, КППГнг(А)-FRHF, ВВГЭнг(А)-FRLS - U, ППГЭнг(А)-FRHF - U, ППГнг(А)-FRHF - U, ВВГЭнг(А)-FRLSLTx - U, ВВГнг(А)-FRLSLTx - U, ВВГнг(А)-FRLS - U, КВВГнг(А)-FRLS, КВВГЭнг(А)-FRLS'}]

const Tucables = [{ TuID: 1, name:'ТУ-3565-002-53930360-2008'},{ TuID: 2, name:'ТУ-3565-002-53930360-2009'}, { TuID: 3, name:'ТУ-3565-002-53930360-2010'},{ TuID: 4, name:'ТУ-3565-002-53930360-2011'},{ TuID: 5, name:'ТУ-3565-002-53930360-2012'},{ TuID: 6, name:'ТУ-3565-002-53930360-2013'},{ TuID: 7, name:'ТУ 3565-003-53930360-2013'},{ TuID: 8, name:'ТУ 3565-003-53930360-2013'},{ TuID: 9, name:'ТУ 3565-006-53930360-2010'},{ TuID: 10, name:'ТУ 3565-006-53930360-2011'},{ TuID: 11, name:'ТУ 3565-006-53930360-2012'},{ TuID: 12, name:'ТУ 3565-006-53930360-2013'},{ TuID: 13, name:'ТУ 3581-018-53930360-2015'},{ TuID: 14, name:'ТУ 3574-020-53930360-2014'},{ TuID: 15, name:'ТУ 16.К71-337-2004'},{ TuID: 16, name:'ТУ 3587-017-70464675-2015'}]




new Vue({
  el: '#app',
  data: function() {
    return {
      data,
      times,
      okltypes,
      cables,
      Tucables,
      time: "",
      okltype: "",
      cable: "",
      Tucable: "",
    }
  },
  methods: {
    findOkltypeName: function (okltypeID) {
      return this.okltypes.find(okltype => okltype.okltypeID === okltypeID).name
    },
    findOkltypeFullName: function (okltypeID) {
      return this.okltypes.find(okltype => okltype.okltypeID === okltypeID).fullname
    },
    findOklsostav: function (okltypeID) {
      return this.okltypes.find(okltype => okltype.okltypeID === okltypeID).oklsostav
    },
    findtimeName: function (timeID) {
      return this.times.find(time => time.timeID === timeID).name
    },
    findCableName: function (cableID) {
      return this.cables.find(cable => cable.cableID === cableID).name
    },
    findCableFullName: function (cableID) {
      return this.cables.find(cable => cable.cableID === cableID).fullname
    },
    findTuCableName: function (TuID) {
      return this.Tucables.find(Tucable => Tucable.TuID === TuID).name
    },
    reset: function () {
      this.time = ""
      this.okltype = ""
      this.cable = ""
      this.Tucable = ""
    }
    
  }, 
  computed: {
    filteredData: function() {
      let resultData = this.data
      if (this.time) {
        resultData = resultData.filter(item => item.timeID === this.time)
      }
      if (this.okltype) {
        resultData = resultData.filter(item => item.okltypeID === this.okltype)
      }
     if (this.cable) {
        resultData = resultData.filter(item => item.cableID === this.cable)
      }
      if (this.Tucable) {
        resultData = resultData.filter(item => item.TuID === this.Tucable)
      }
      return resultData
    },
    
    filteredOkltypes: function () {
      const okltypeIDs = this.filteredData.reduce((acc, next) => {
        if (acc.indexOf(next.okltypeID) === -1){
          return [...acc, next.okltypeID]  
        }
        return acc
      },[])
      
      if (okltypeIDs.length) {
        return okltypeIDs.map(okltypeID => ({okltypeID, name: this.findOkltypeName(okltypeID)}))
      }
      return this.okltypes
    },
    
    filteredtimes: function () {
      const timesIDs = this.filteredData.reduce((acc, next) => {
        if (acc.indexOf(next.timeID) === -1){
          return [...acc, next.timeID]  
        }
        return acc
      },[])
      
      if (timesIDs.length) {
        return timesIDs.map(timeID => ({timeID, name: this.findtimeName(timeID)}))
      }
      return this.times
    },
  
  filteredCables: function () {
      const cablesIDs = this.filteredData.reduce((acc, next) => {
        if (acc.indexOf(next.cableID) === -1){
          return [...acc, next.cableID]  
        }
        return acc
      },[])
      
      if (cablesIDs.length) {
        return cablesIDs.map(cableID => ({cableID, name: this.findCableName(cableID)}))
      }
      return this.cables
    },
    
filteredTucables: function () {
      const TucablesIDs = this.filteredData.reduce((acc, next) => {
        if (acc.indexOf(next.TuID) === -1){
          return [...acc, next.TuID]  
        }
        return acc
      },[])
      
      if (TucablesIDs.length) {
        return TucablesIDs.map(TuID => ({TuID, name: this.findTuCableName(TuID)}))
      }
      return this.Tucables
    },
 }
  
})
