import 'jquery-ui/ui/widgets/slider'

export default class RangeSlider {
  constructor(wrapper, startValues, minMaxPrice) {
    this.wrapper = $(wrapper)
    this.slider = this.wrapper.children('.range-slider__slider')
    this.input = this.wrapper.children('.range-slider__value')
    this.startValues = startValues
    this.minMaxPrice = minMaxPrice
    this._initRangeSlider()
  }

  _initRangeSlider() {
    const that = this
    this.slider.slider({
      range: true,
      min: that.minMaxPrice[0],
      max: that.minMaxPrice[1],
      values: [that.startValues[0], that.startValues[1]],
      slide: function(event,ui){
        const firstValue = spacingHelper(ui.values[0]+'');
        const secondValue = spacingHelper(ui.values[1]+'');
        that.input.val(`${firstValue} - ${secondValue}`);
      }
    })
    const firstValue = spacingHelper(that.startValues[0])
    const secondValue = spacingHelper(that.startValues[1])
    that.input.val(`${firstValue} - ${secondValue}`);
  }
}

function spacingHelper (value) {
  const stringifyValue = String(value)
  if (value >= 10000) return stringifyValue.substring(0,2) + ' ' + stringifyValue.substring(2)+ 'P';
  if (value >= 1000) return stringifyValue.substring(0,1) + ' ' + stringifyValue.substring(1)+ 'P';
  if (value <1000) return stringifyValue + 'P';

}