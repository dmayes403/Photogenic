var app = angular.module("myApp",[])

app.controller('picGenres', function($scope) {
		var families = [
			
					'./images/DRM_0001.jpg',
					'/Users/davidmayes/Desktop/Angular/images/DRM_0044.jpg',
					'/Users/davidmayes/Desktop/Angular/images/DRM_0002.jpg',
					'/Users/davidmayes/Desktop/Angular/images/DRM_0003.jpg'
				];	

		$scope.families = families;
	});

app.controller('firstImpression', function($scope) {
		var states = [
			{
				firstName: 'Chelsea',
				lastName: 'McGuire',
				state: 'Iowa',
				location: 'I can shoot anywhere from Ames to Des Moines, Iowa.',
				pricing: 150,
				summary: 'My Family pricing starts at $150. This includes 1 hour of coverage, and up to two changes of outfits.\
	            Do you need more than 1 hour of coverage? No problem, each additional hour needed is $100/hr.',
	            images: [
	            	'/Users/davidmayes/Desktop/Angular/images/DRM_0025.jpg',
	            	'/Users/davidmayes/Desktop/Angular/images/DRM_0028.jpg',
					'/Users/davidmayes/Desktop/Angular/images/DRM_0032.jpg'
					]
			},
			{
				firstName: 'Lauren',
				lastName: 'Starcey',
				state: 'Colorado',
				location: 'I can shoot anywhere from Grand Junction to Aurora, Colorado.',
				pricing: 50,
				summary: 'My landscape pricing starts at $50 a print. This includes 1 copy and free shipping.\
	            Are you looking for additional prints? Package multiple prints together at a price of $35 per each additional image.',
	            images: [
	            	'/Users/davidmayes/Desktop/Angular/images/DRM_0122.jpg',
	            	'/Users/davidmayes/Desktop/Angular/images/DRM_0123.jpg',
					'/Users/davidmayes/Desktop/Angular/images/DRM_0124.jpg'
					]
			},
			{
				firstName: 'David',
				lastName: 'Mayes',
				state: 'Utah',
				location: 'I can shoot anywhere from Logan to St. George Utah.',
				pricing: 200,
				summary: 'Do you need more than two hours of wedding day coverage? No problem, an further coverage that you may need is $200/hr.\
            	Thinking that you want both bridals and engagements? We can do that too! for an additional $200 we can do both bridals and engagements.',
            	images: [
	            	'/Users/davidmayes/Desktop/Angular/images/DRM_0004.jpg',
	            	'/Users/davidmayes/Desktop/Angular/images/DRM_0033.jpg',
					'/Users/davidmayes/Desktop/Angular/images/DRM_0038.jpg'
					]
			}
		]

		var imageIndex = 0;

		$scope.nextImage = function(imageIndex) {
			if($scope.imageIndex < 2){
			$scope.imageIndex+=1;
			} else {
				$scope.imageIndex = 0;
			}
		};

		$scope.imageIndex = imageIndex;
		$scope.states = states;
	});

