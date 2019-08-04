function arkaFood(price, discount, distance, tax) {
	if (discount == false || discount == true) {
		if (distance < 1.5) {
			let dist = 5000
			if (tax) {
				let totalPrice = price + ((5/100) * price) + dist
				console.log(totalPrice)
			} else {
				let totalPrice = price + dist
				console.log(totalPrice)
			}
		} else {
			let dist = 5000
			for(i = 1.5; i <= distance; i++){
				dist += 3000
			}
			if (tax) {
				let totalPrice = price + ((5/100) * price) + dist
				console.log(totalPrice)
			} else {
				let totalPrice = price + dist
				console.log(totalPrice)
			}
		}
	} else if (discount.toUpperCase() == 'ARKAFOOD5') {
		if (price >= 50000) {
			let disc = (50/100) * price
			if (disc <= 50000) {
				let priDisc = price - disc
				if (distance < 1.5) {
					let dist = 5000
					if (tax) {
						let totalPrice = priDisc + ((5/100) * priDisc) + dist
						console.log(totalPrice)
					} else {
						let totalPrice = priDisc + dist
						console.log(totalPrice)
					}
				} else {
					let dist = 5000
					for(i = 1.5; i <= distance; i++){
						dist += 3000
					}
					if (tax) {
						let totalPrice = priDisc + ((5/100) * priDisc) + dist
						console.log(totalPrice)
					} else {
						let totalPrice = priDisc + dist
						console.log(totalPrice)
					}
				}
			} else {
				let priDisc = price - 50000
				if (distance < 1.5) {
					let dist = 5000
					if (tax) {
						let totalPrice = priDisc + ((5/100) * priDisc) + dist
						console.log(totalPrice)
					} else {
						let totalPrice = priDisc + dist
						console.log(totalPrice)
					}
				} else {
					let dist = 5000
					for(i = 1.5; i <= distance; i++){
						dist += 3000
					}
					if (tax) {
						let totalPrice = priDisc + ((5/100) * priDisc) + dist
						console.log(totalPrice)
					} else {
						let totalPrice = priDisc + dist
						console.log(totalPrice)
					}
				}
			}
		} else {
			console.log('ARKA KURANG')
		}
	} else if(discount.toUpperCase() == 'DITRAKTIRDEMY') {
		if (price >= 25000) {
			let disc = (60/100) * price
			if (disc <= 30000) {
				let priDisc = price - disc
				if (distance < 1.5) {
					let dist = 5000
					if (tax) {
						let totalPrice = priDisc + ((5/100) * price) + dist
						console.log(totalPrice)
					} else {
						let totalPrice = priDisc + dist
						console.log(totalPrice)
					}
				} else {
					let dist = 5000
					for(i = 1.5; i <= distance; i++){
						dist += 3000
					}
					if (tax) {
						let totalPrice = priDisc + ((5/100) * price) + dist
						console.log(totalPrice)
					} else {
						let totalPrice = priDisc + dist
						console.log(totalPrice)
					}
				}
			} else {
				let priDisc = price - 30000
				if (distance < 1.5) {
					let dist = 5000
					if (tax) {
						let totalPrice = priDisc + ((5/100) * price) + dist
						console.log(totalPrice)
					} else {
						let totalPrice = priDisc + dist
						console.log(totalPrice)
					}
				} else {
					let dist = 5000
					for(i = 1.5; i <= distance; i++){
						dist += 3000
					}
					if (tax) {
						let totalPrice = priDisc + ((5/100) * price) + dist
						console.log(totalPrice)
					} else {
						let totalPrice = priDisc + dist
						console.log(totalPrice)
					}
				}
			}
		} else {
			console.log('DEMY KURANG')	
		}
	} else {
		console.log('MAAF VOUCHER TIDAK VALID')
	}
}

arkaFood(75000, 'ARKAFOOD5', 5, false)
arkaFood(25000, 'DITRAKTIRDEMY', 7, true)