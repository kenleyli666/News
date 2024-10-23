// <-- SME Financing Guarantee Fee Calculator - Coding Start Here -->
//Version 0.4
//Prepared by Peter Lee/OPS dated 2010.12.02
function clrForm(form) {
	document.myCalculator.OIR.value = "";
	document.myCalculator.GFF.value = "";
	document.myCalculator.GFR.value = "";
	document.myCalculator.GFDetails.value = "";
}

function calOIR(form) {

	var FacType = document.myCalculator.FacType.value;
	var GFPmt = document.myCalculator.GFPmt.value;
	var RSF = document.myCalculator.RSF.value;
	var OPB = document.myCalculator.FacOrigOPB.value;
	var Tenor = document.myCalculator.FacTenor.value;
	var IntRate = document.myCalculator.FacIntRate.value;
	var FeeAmt = document.myCalculator.FacFeeAmt.value;


	//  document.myCalculator.PMT.value = "";
	//  document.myCalculator.OIR.value = "";
	//  document.myCalculator.GFF.value = "";
	//  document.myCalculator.GFR.value = "";
	//  document.myCalculator.GFDetails.value = "";

	if(IsNumeric(OPB.replace(/,/g, "")) == false) {

		alert("請於「貸款金額 / 信貸額度」一欄填上數值！");
		document.myCalculator.FacOrigOPB.value = "";
		document.myCalculator.FacOrigOPB.focus();

	} else if(OPB.replace(/,/g, "") * 1 == 0) {

		alert("「貸款金額 / 信貸額度」一欄必須是大於零的數值！");
		document.myCalculator.FacOrigOPB.focus();

	} else if(IsNumeric(IntRate.replace(/,/g, "")) == false) {

		alert("請於「貸款利率(年息)」一欄填上數值！");
		document.myCalculator.FacIntRate.value = "";
		document.myCalculator.FacIntRate.focus();

	} else if(IntRate.replace(/,/g, "") * 1 == 0) {

		alert("「貸款利率(年息)」一欄必須是大於零的數值！!");
		document.myCalculator.FacIntRate.focus();

	} else if(FacType == "RF" && GFPmt == "S") {

		alert("「循環信貸」不設「一次付清」的擔保費繳付方式 ！");

	} else if(RSF == 80 && parseFloat(OPB.replace(/,/g, "")) > 18000000) {

		alert("「貸款金額 / 信貸額度」一欄不可多於港幣一千八百萬！");

	//} else if(RSF != 80 && parseFloat(OPB.replace(/,/g, "")) > 12000000) {

	//	alert("「貸款金額 / 信貸額度」一欄不可多於港幣一千二百萬！");		

    //WWW0124 90% guarantee product
	//} else if(RSF != 80 && Tenor > 5) {
    //    alert("「還款年期」一欄不可多於 5 年!");
	} else if(RSF == 90 && Tenor > 5) {

		alert("九成信貸擔保產品的｢還款年期｣ 不可超過五年");

	} else if(RSF == 90 && FacType == "RF") {

		alert("｢循環信貸｣不適用於九成信貸擔保產品");

	} else if(RSF == 90 && parseFloat(OPB.replace(/,/g, "")) > 8000000) {

		alert("九成信貸擔保產品的 ｢貸款金額/信貸額度｣ 不可多於港幣八百萬");

	} else if(RSF == 90  && IntRate.replace(/,/g, "") * 1 > 10) {

		alert("九成信貸擔保產品的 ｢貸款利率(年息)｣ 不可多於10%");
		document.myCalculator.FacIntRate.focus();
				
	} else {

		OPB = parseFloat(OPB.replace(/,/g, ""));
		FeeAmt = parseFloat(FeeAmt.replace(/,/g, ""));
		IntRate = IntRate / 100;
		var PMT = calPMT(IntRate / 12, Tenor * 12, OPB);

		var chkFee = FeeAmt / OPB;
		if(chkFee <= 0.0025) {
			FeeAmt = 0;
		}

		if(FacType == "TL") {
			//    document.myCalculator.PMT.value = addCommas(PMT,2);

			var CurrOPB = OPB * 1;
			var CurrPrcp = 0;
			var AggOPB = 0;
			var TenorMth = Tenor * 12;
			var myCashFlow = new Array();
			var myOpenOPB = new Array();
			for(var i = 0; i <= Tenor * 12; i++) {
				if(i == 0) {
					myCashFlow[i] = OPB * -1;
				} else {
					myOpenOPB[i] = CurrOPB;
					myCashFlow[i] = PMT;
					AggOPB += CurrOPB;
					CurrPrcp = PMT - (CurrOPB * IntRate / 12);
					CurrOPB -= CurrPrcp;
				}
				if(i == 0 || (i == 12 && TenorMth > 12) || (i == 24 && TenorMth > 24) || (i == 36 && TenorMth > 36) || (i == 48 && TenorMth > 48) || (i == 60 && TenorMth > 60) || (i == 72 && TenorMth > 72)) {
					myCashFlow[i] += FeeAmt * 1;
				}
			}

			var OIR = IRR(myCashFlow, 0.00001) * 12 * 100;

		} else {
			var OIR = (IntRate + (FeeAmt / OPB)) * 100;
		}

		//  var OIR_Display = OIR.toFixed(2);
		OIR = OIR.toFixed(2);
		document.myCalculator.OIR.value = OIR;
		var chkOIR = OIR;
		if(chkOIR >= 0 && chkOIR <= 10) {
			if(RSF == 80) {
				GFF = 0.09*0.5;
  			    var GFR = Math.round(OIR * GFF * 10000) / 10000;
			} else if(RSF == 90) {
				GFF = 0.045;
   			    var GFR = Math.round(OIR * GFF * 10000) / 10000;
			} else if(RSF == 70) {
				GFF = 0.32;
			    var GFR = Math.max(Math.round(OIR * GFF * 10000) / 10000, 0.5);
			} else if(RSF == 60) {
				GFF = 0.24;
			    var GFR = Math.max(Math.round(OIR * GFF * 10000) / 10000, 0.5);
			} else {
				//GFF = 0.18;
				GFF = 0;
			    var GFR = Math.max(Math.round(OIR * GFF * 10000) / 10000, 0.5);
			}
			//CR2210 var GFR = Math.max(Math.round(OIR * GFF * 10000) / 10000, 0.5);
        } else if (chkOIR > 10 && RSF == 90) {
			alert("九成信貸擔保產品的 ｢貸款利率(年息)｣ 不可多於10%");
			var GFF = "N/A";
			var GFR = "N/A";		  						
		} else if(chkOIR > 10 && chkOIR <= 12) {
			if(RSF == 80) {
				GFF = 0.108*0.5;
  			    var GFR = Math.round(OIR * GFF * 10000) / 10000;
			} else if(RSF == 90) {
				GFF = 0.045;
   			    var GFR = Math.round(OIR * GFF * 10000) / 10000;
			} else if(RSF == 70) {
				GFF = 0.35;
			    var GFR = Math.max(Math.round(OIR * GFF * 10000) / 10000, 0.5);
			} else if(RSF == 60) {
				GFF = 0.26;
			    var GFR = Math.max(Math.round(OIR * GFF * 10000) / 10000, 0.5);
			} else {
				//GFF = 0.20;
				GFF = 0;
			    var GFR = Math.max(Math.round(OIR * GFF * 10000) / 10000, 0.5);
			}
			//CR2210 var GFR = Math.max(Math.round(OIR * GFF * 10000) / 10000, 0.5);
		} else {
			alert("「貸款利率(年息)」一欄不可多於12%!");
			var GFF = "N/A";
			var GFR = "N/A";

		}

		if(GFF != "N/A") {
			document.myCalculator.GFF.value = GFF.toFixed(2);
		} else {
			document.myCalculator.GFF.value = GFF;
		}
		if(GFR != "N/A") {
			//    document.myCalculator.GFR.value = GFR.toFixed(4);
			document.myCalculator.GFR.value = GFR.toFixed(2);
		} else {
			document.myCalculator.GFR.value = GFR;
		}

	}
	var FeeSchedule = "";
	if(GFPmt == "A") {
		if(FacType == "TL") {
			var GFBase = "申請或續期時貸款金額";
		} else {
			var GFBase = "申請或續期時信貸額度";
		}
		//    var ThisGF = OPB * GFR.toFixed(4) / 100;
		//    var ThisGF = OPB * GFR.toFixed(2) / 100;
		//GIP0040 8020 product
		//Precision of Value :-> Floating
		var ThisGF = OPB * GFR / 100;

		//    ThisGF = ThisGF.toFixed(2);
		ThisGF = ThisGF.toFixed(0);
		//    var GFDetails = "Annual Guarantee Fee Rate of " + GFR.toFixed(4) + "% on " + GFBase;
		var GFDetails = "每年擔保費率為" + GFBase + "的" + GFR.toFixed(2) + "%";
		GFDetails += "\n(來年繳交的擔保費金額大約相等於 港幣" + addCommas(ThisGF, 0) + ")";
		//        GFDetails += "\n\n<<The following is for internal reference only>>\n\n";
		//        GFDetails += "The Overall Interest Rate is determined as follows:\n\n";
		//        GFDetails += "                        [Annual Fee Amount]\n";
		//        GFDetails += "[Interest Rate] + ------------------------------\n";
		//        GFDetails += "                  [Loan Amount / Facility Limit]\n";

	} else if(GFPmt == "S" && FacType == "TL") {
		//var GFAmt = Math.round(AggOPB * GFR / 12)/100;
		var GFAmt = 0;
		FeeSchedule = "\n\n<<The following is for internal reference only>>\n\n";
		FeeSchedule += "The Overall Interest Rate and Guarantee fee ";
		FeeSchedule += "are determined in accordance with the following Cash Flow Schedule:";
		FeeSchedule += "\n\nPeriod  Cash Flow        Open Prcp Bal    Gtee Fee";
		FeeSchedule += "\n==================================================\n";
		FeeSchedule += "0       " + addCommas(myCashFlow[0], 0) + "\n";
		for(var i = 1; i <= Tenor * 12; i++) {
			var ThisOPB = parseFloat(myOpenOPB[i]);
			//GIP0040 8020 product
			//Precision of Value :-> Floating
			var ThisGF = ThisOPB * GFR / 1200;
			//        var ThisGF = ThisOPB * GFR.toFixed(2) / 1200;
			//      ThisOPB = ThisOPB.toFixed(2);
			// 2010.12.30 Remove the rounding on Monthly GF Entry
			//      ThisGF = ThisGF.toFixed(2);
			GFAmt += parseFloat(ThisGF);

			var ThisRow = i + "";
			for(var a = ThisRow.length; a <= 7; a++) {
				ThisRow += " ";
			}
			ThisRow += addCommas(myCashFlow[i], 0);
			for(var b = ThisRow.length; b <= 24; b++) {
				ThisRow += " ";
			}
			ThisRow += addCommas(ThisOPB, 0);
			for(var c = ThisRow.length; c <= 41; c++) {
				ThisRow += " ";
			}
			ThisRow += addCommas(ThisGF, 0) + "\n";
			FeeSchedule += ThisRow;
		}

		//    var GFDetails = "Guarantee Fee Amount approximately equal to\nHK$ " + addCommas(GFAmt,0) + FeeSchedule;
		var GFDetails = "擔保費金額大約相等於 港幣" + addCommas(GFAmt.toFixed(0), 0);
	} else {
		var GFDetails = "";
	}

	if(GFR == "N/A") {
		document.myCalculator.GFDetails.value = "";
	} else {
		document.myCalculator.GFDetails.value = GFDetails;
	}
}

function calPMT(myRate, myTenor, myPV) {

	myResult = myPV * (myRate + (myRate / (Math.pow((1 + myRate), myTenor) - 1)));
	return myResult;

}


function IRR(cashFlows, estimatedResult) {

	var result = "isNAN";
	if(cashFlows != null && cashFlows.length > 0) {
		if(cashFlows[0] != 0) {
			var noOfCashFlows = cashFlows.length;
			var sumCashFlows = 0;
			var noOfNegativeCashFlows = 0;
			var noOfPositiveCashFlows = 0;
			for(var i = 0; i < noOfCashFlows; i++) {
				sumCashFlows += cashFlows[i];
				if(cashFlows[i] > 0) {
					noOfPositiveCashFlows++;
				} else {
					if(cashFlows[i] < 0) {
						noOfNegativeCashFlows++;
					}
				}
			}

			if(noOfNegativeCashFlows > 0 && noOfPositiveCashFlows > 0) {
				var irrGuess = 0.1; // default: 10%
				if(!isNaN(estimatedResult)) {
					irrGuess = estimatedResult;
					if(irrGuess <= 0) {
						irrGuess = 0.5;
					}
				}

				var irr = 0;
				if(sumCashFlows < 0) { // sum of cash flows negative?
					irr = -irrGuess;
				} else { // sum of cash flows not negative
					irr = irrGuess;
				}

				var minDistance = 1e-15;
				var cashFlowStart = cashFlows[0];
				var maxIteration = 1000000;
				var wasHi = false;
				var cashValue = 0;
				for(var i = 0; i <= maxIteration; i++) {
					cashValue = cashFlowStart; // init with startup costs
					for(var j = 1; j < noOfCashFlows; j++) {
						cashValue += cashFlows[j] / Math.pow(1 + irr, j);
					}
					if(Math.abs(cashValue) < 0.01) {
						result = irr;
						break;
					}

					if(cashValue > 0) {
						if(wasHi) {
							irrGuess /= 2;
						}
						irr += irrGuess;
						if(wasHi) {
							irrGuess -= minDistance;
							wasHi = false;
						}
					} else { // cash value < 0 => next irr < current irr
						irrGuess /= 2;
						irr -= irrGuess;
						wasHi = true;
					}

					if(irrGuess <= minDistance) {
						result = irr;
						break;
					}
				}
			}
		}
	}
	return result;
}

function chgNumericFormat() {

	var OPB = document.myCalculator.FacOrigOPB.value;
	var IntRate = document.myCalculator.FacIntRate.value;
	if(IsNumeric(OPB.replace(/,/g, "")) == false) {
		alert("請於「貸款金額 / 信貸額度」一欄填上數值！");
		document.myCalculator.FacOrigOPB.value = "";
		document.myCalculator.FacOrigOPB.focus();
	} else if(OPB == "") {
		document.myCalculator.FacOrigOPB.value = addCommas(0, 2);
		alert("「貸款金額 / 信貸額度」一欄必須是大於零的數值！");
		document.myCalculator.FacOrigOPB.focus();
	} else if(IsNumeric(IntRate.replace(/,/g, "")) == false) {
		alert("請於「貸款利率(年息)」一欄填上數值！");
		document.myCalculator.FacIntRate.value = "";
		document.myCalculator.FacIntRate.focus();
	} else if(IntRate == "") {
		document.myCalculator.FacIntRate.value = addCommas(0, 2);
		alert("「貸款利率(年息)」一欄必須是大於零的數值！!");
		document.myCalculator.FacIntRate.focus();
	} else {
		document.myCalculator.FacOrigOPB.value = addCommas(OPB, 2);
		document.myCalculator.FacIntRate.value = addCommas(IntRate, 2);
		//    document.myCalculator.FacFeeAmt.value = addCommas(FeeAmt);
	}
}

function addCommas(nStr, nDp) {
	var temp = nStr + '';
	temp = temp.replace(/,/g, "");
	temp = temp.replace(/-/g, "");
	if(IsNumeric(temp)) {
		temp = parseFloat(temp);
		temp = temp.toFixed(nDp);
		temp += '';
		x = temp.split('.');

		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while(rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		//return x1 + x2;
		if(nStr < 0) {
			if(nDp == 0) {
				return "-" + x1;
			} else {
				return "-" + x1 + x2;
			}
		} else {
			if(nDp == 0) {
				return x1;
			} else {
				return x1 + x2;
			}
			//      return x1;
		}
	} else {
		return nStr;
	}
}

function IsNumeric(sText) {
	var ValidChars = "0123456789.";
	var IsNumber = true;
	var Char;
	var dpNum = 0;
	for(i = 0; i < sText.length && IsNumber == true; i++) {
		Char = sText.charAt(i);
		if(ValidChars.indexOf(Char) == -1) {
			IsNumber = false;
		}
		if(Char == ".") {
			dpNum += 1;
		}
	}
	if(dpNum > 1) {
		IsNumber = false;
	}
	return IsNumber;
}

// <-- SME Financing Guarantee Fee Calculator - Coding End Here -->

/********** Start of my script **********/ 
let topicCtrl = document.querySelector('.topic-ctrl');
let form = document.querySelector('.form');
let chevronDown = document.querySelector('.fa-chevron-down');
let chevronUp = document.querySelector('.fa-chevron-up');

// 初始化表單的顯示狀態
form.style.display = 'none';

// 當點擊 topic-ctrl 時，切換表單的顯示狀態和箭頭的顯示
topicCtrl.addEventListener('click', function() {
    if (form.style.display === 'none') {
        form.style.display = 'flex';
        chevronDown.style.display = 'none';
        chevronUp.style.display = 'block';
    } else {
        form.style.display = 'none';
        chevronDown.style.display = 'block';
        chevronUp.style.display = 'none';
    }
});



var slider = document.getElementById("myRange"); //滑桿控件範圍
var output = document.getElementById("amount"); //輸入銀碼
output.value = slider.value;

slider.oninput = function() {
  output.value = this.value;
}

output.oninput = function() {
  slider.value = this.value;
}


let range = document.getElementById('myRange'); //滑桿控件範圍
// let form = document.querySelector('.form'); //整個表單
let resetBtn = document.getElementById('resetBtn'); //重設

// 初始化滑塊和表單的背景顏色
range.style.background = '#fff'; //原本白色
form.style.background = '#007bff'; //原本藍色
topicCtrl.style.background = '#007bff';

// 當滑塊的值變化時，更新滑塊為linear-gradient和表單的背景顏色為綠色
range.addEventListener('input', function() {
    let percent = (this.value - this.min) / (this.max - this.min);
    this.style.background = `linear-gradient(to right, #40d8a8 0%, #007bff ${percent * 100}%, #e7e7e7 ${percent * 100}%, #e7e7e7 100%)`;
    form.style.background = '#2c9838';
	topicCtrl.style.background = '#2c9838';
});

// 當點擊重設按鈕時，將表單的背景顏色重設為原來的藍色顏色
resetBtn.addEventListener('click', function() {
    form.style.background = '#007bff';
	topicCtrl.style.background = '#007bff';
});
/********** End of my script **********/  