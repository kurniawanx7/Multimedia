(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.btn_tombolD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("d", "55px 'Pilot Command Condensed'", "#FFFFFF");
	this.text.lineHeight = 61;
	this.text.lineWidth = 49;
	this.text.parent = this;
	this.text.setTransform(342.55,18.3);

	this.text_1 = new cjs.Text("Tombol", "40px 'Pilot Command Condensed'", "#FFFFFF");
	this.text_1.lineHeight = 45;
	this.text_1.lineWidth = 179;
	this.text_1.parent = this;
	this.text_1.setTransform(58.05,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{x:58.05,y:27.4,lineWidth:179}},{t:this.text,p:{x:342.55,y:18.3}}]}).to({state:[{t:this.text_1,p:{x:56.05,y:27.75,lineWidth:185}},{t:this.text,p:{x:340.55,y:18.65}}]},1).to({state:[]},1).wait(15));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8H5IAAvxID5AAIAAPxg");
	this.shape.setTransform(289.45,50.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#0000FF","#000000"],[0,1],0,0,0,0,0,78.1).s().p("ApSH5IAAvxISlAAIAAPxg");
	this.shape_1.setTransform(361.45,50.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,147.4).s().p("A1oH5IAAvxMArRAAAIAAPxg");
	this.shape_2.setTransform(138.475,50.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,78.1).s().p("ApSH5IAAvxISlAAIAAPxg");
	this.shape_3.setTransform(361.45,50.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#0000FF","#000000"],[0,1],0,0,0,0,0,147.4).s().p("A1oH5IAAvxMArRAAAIAAPxg");
	this.shape_4.setTransform(138.475,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape}]},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,421,101);


(lib.btn_tombolC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("C", "55px 'Comic Sans MS'", "#FFFFFF");
	this.text.lineHeight = 79;
	this.text.lineWidth = 49;
	this.text.parent = this;
	this.text.setTransform(342.55,17.3);

	this.text_1 = new cjs.Text("Tombol", "50px 'Comic Sans MS'", "#FFFFFF");
	this.text_1.lineHeight = 72;
	this.text_1.lineWidth = 179;
	this.text_1.parent = this;
	this.text_1.setTransform(58.05,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{x:58.05,y:21.4,lineWidth:179}},{t:this.text,p:{x:342.55,y:17.3}}]}).to({state:[{t:this.text_1,p:{x:56.05,y:21.75,lineWidth:185}},{t:this.text,p:{x:340.55,y:18.65}}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ApSH5IAAvxISlAAIAAPxg");
	this.shape.setTransform(361.45,50.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990099").s().p("A1oH5IAAvxMArRAAAIAAPxg");
	this.shape_1.setTransform(138.475,50.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Ah8H5IAAvxID5AAIAAPxg");
	this.shape_2.setTransform(289.45,50.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993399").s().p("ApSH5IAAvxISlAAIAAPxg");
	this.shape_3.setTransform(361.45,50.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0099").s().p("A1oH5IAAvxMArRAAAIAAPxg");
	this.shape_4.setTransform(138.475,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,421,101);


(lib.btn_tombolB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("B", "55px 'Pilot Command Condensed'");
	this.text.lineHeight = 61;
	this.text.lineWidth = 49;
	this.text.parent = this;
	this.text.setTransform(342.55,18.3);

	this.text_1 = new cjs.Text("Tombol", "40px 'Pilot Command Condensed'", "#FFFFFF");
	this.text_1.lineHeight = 45;
	this.text_1.lineWidth = 179;
	this.text_1.parent = this;
	this.text_1.setTransform(58.05,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{x:58.05,y:27.4,color:"#FFFFFF",lineWidth:179}},{t:this.text,p:{x:342.55,y:18.3,color:"#000000"}}]}).to({state:[{t:this.text_1,p:{x:56.05,y:27.75,color:"#000000",lineWidth:185}},{t:this.text,p:{x:340.55,y:18.65,color:"#FFFFFF"}}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah8H5IAAvxID5AAIAAPxg");
	this.shape.setTransform(289.45,50.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ApSH5IAAvxISlAAIAAPxg");
	this.shape_1.setTransform(361.45,50.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("A1oH5IAAvxMArRAAAIAAPxg");
	this.shape_2.setTransform(138.475,50.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF66").s().p("Ah8H5IAAvxID5AAIAAPxg");
	this.shape_3.setTransform(289.45,50.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9933").s().p("ApSH5IAAvxISlAAIAAPxg");
	this.shape_4.setTransform(361.45,50.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("A1oH5IAAvxMArRAAAIAAPxg");
	this.shape_5.setTransform(138.475,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,421,101);


(lib.btn_tombolA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("A", "55px 'Comic Sans MS'");
	this.text.lineHeight = 79;
	this.text.lineWidth = 49;
	this.text.parent = this;
	this.text.setTransform(342.55,8.3);

	this.text_1 = new cjs.Text("Tombol", "50px 'Comic Sans MS'", "#FFFFFF");
	this.text_1.lineHeight = 72;
	this.text_1.lineWidth = 179;
	this.text_1.parent = this;
	this.text_1.setTransform(58.05,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{x:58.05,y:17.4,color:"#FFFFFF",lineWidth:179}},{t:this.text,p:{x:342.55,y:8.3,color:"#000000"}}]}).to({state:[{t:this.text_1,p:{x:56.05,y:16.75,color:"#000000",lineWidth:185}},{t:this.text,p:{x:340.55,y:13.65,color:"#FFFFFF"}}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CCCC").s().p("Ah8H5IAAvxID5AAIAAPxg");
	this.shape.setTransform(289.45,50.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#336633").s().p("A1oH5IAAvxMArRAAAIAAPxg");
	this.shape_1.setTransform(138.475,50.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CC33").s().p("ApSH5IAAvxISlAAIAAPxg");
	this.shape_2.setTransform(361.45,50.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996699").s().p("Ah8H5IAAvxID5AAIAAPxg");
	this.shape_3.setTransform(289.45,50.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0099").s().p("A1oH5IAAvxMArRAAAIAAPxg");
	this.shape_4.setTransform(138.475,50.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6699").s().p("ApSH5IAAvxISlAAIAAPxg");
	this.shape_5.setTransform(361.45,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,421,101);


// stage content:
(lib.FakhirahR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {tmblA:0,tmblB:4,tmblC:9,tmblD:14};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4,9,14];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// untuk mnegarahkan tombol ke label "tombol"
		this.btn_tmblA.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("tmblB");
		}
	}
	this.frame_4 = function() {
		this.btn_tmblB.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("tmblC");
		}
	}
	this.frame_9 = function() {
		this.btn_tmblC.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("tmblD");
		}
	}
	this.frame_14 = function() {
		this.btn_tmblD.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("tmblA");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(1));

	// tombol
	this.btn_tmblA = new lib.btn_tombolA();
	this.btn_tmblA.name = "btn_tmblA";
	this.btn_tmblA.setTransform(313.55,228.45,1,1,0,0,0,210.5,50.5);
	new cjs.ButtonHelper(this.btn_tmblA, 0, 1, 1);

	this.btn_tmblB = new lib.btn_tombolB();
	this.btn_tmblB.name = "btn_tmblB";
	this.btn_tmblB.setTransform(102.55,178.45);
	new cjs.ButtonHelper(this.btn_tmblB, 0, 1, 1);

	this.btn_tmblC = new lib.btn_tombolC();
	this.btn_tmblC.name = "btn_tmblC";
	this.btn_tmblC.setTransform(102.55,178.45);
	new cjs.ButtonHelper(this.btn_tmblC, 0, 1, 1);

	this.btn_tmblD = new lib.btn_tombolD();
	this.btn_tmblD.name = "btn_tmblD";
	this.btn_tmblD.setTransform(102.55,178.45);
	new cjs.ButtonHelper(this.btn_tmblD, 0, 1, 2, false, new lib.btn_tombolD(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_tmblA}]}).to({state:[{t:this.btn_tmblB}]},4).to({state:[{t:this.btn_tmblB},{t:this.btn_tmblC}]},5).to({state:[{t:this.btn_tmblB},{t:this.btn_tmblC},{t:this.btn_tmblD}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(422.6,418,101.39999999999998,-138.5);
// library properties:
lib.properties = {
	id: '53CBA0A6F4163944B3BA668AEA56E8B1',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['53CBA0A6F4163944B3BA668AEA56E8B1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;