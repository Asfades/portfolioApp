(function (window, document) {
  const html5 	 	 = document.querySelector('#HTML5');
  const css3 		 = document.querySelector('#CSS3');
  const javascript 	 = document.querySelector('#JavaScript');
  const angular 	 = document.querySelector('#AngularJS');
  const php 		 = document.querySelector('#PHP');
  const mysql 	 	 = document.querySelector('#mySQL');
  const node 		 = document.querySelector('#Node');
  const mongo 	 	 = document.querySelector('#Mongo');
  const git 		 = document.querySelector('#Git');
  const gulp 		 = document.querySelector('#Gulp');
  const webpack 	 = document.querySelector('#WebPack');

  let size = 120;

  class Skill {
    constructor(width, height, container, percent) {
      this.svgns 		   = 'http://www.w3.org/2000/svg';
      this.svg 			   = document.createElementNS(this.svgns, 'svg');
      this.width 		   = width;
      this.height 		   = height;
      this.radius 		   = this.width / 2.5;
      this.percent 		   = percent;
      this.strokeDasharray = 2 * Math.PI * this.radius;

      this.svg.setAttribute('width', this.width);
      this.svg.setAttribute('height', this.height);
      this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);

      this.baseCircle = this.createCircle('#1bb696', true);
      this.bgCircle = this.createCircle('#ccc');

      this.add(container);
    }

    createCircle(color, isBase = false) {
      const circle = document.createElementNS(this.svgns, 'circle');
      const cx 	   = this.width / 2;
      const cy	   = this.height / 2;
      circle.setAttribute('cx', cx);
      circle.setAttribute('cy', cy);
      circle.setAttribute('r', this.radius);
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', color);
      circle.setAttribute('stroke-width', '15');
      if (isBase) {
        circle.setAttribute('transform', `rotate(-90 ${cx} ${cy})`);
        circle.setAttribute('stroke-dasharray', this.strokeDasharray);
        circle.setAttribute('stroke-dashoffset', this.strokeDasharray);
      }
      return circle;
    }
    add(container) {
      this.svg.appendChild(this.bgCircle);
      this.svg.appendChild(this.baseCircle);
      container.appendChild(this.svg);
      return this;
    }
    draw(progress) {
      this.baseCircle.setAttribute(
        'stroke-dashoffset',
        (1 - progress * this.percent) * this.strokeDasharray
      );
    }
  }

  const skillHtml5 	  	  = new Skill(size, size, html5, 0.90);
  const skillCss3 	  	  = new Skill(size, size, css3, 0.85);
  const skillJavaScript   = new Skill(size, size, javascript, 0.80);
  const skillAngular	  = new Skill(size, size, angular, 0.70);
  const skillPHP		  = new Skill(size, size, php, 0.35);
  const skillMySQL	  	  = new Skill(size, size, mysql, 0.20);
  const skillNode		  = new Skill(size, size, node, 0.45);
  const skillMongo	  	  = new Skill(size, size, mongo, 0.30);
  const skillGit		  = new Skill(size, size, git, 0.75);
  const skillGulp		  = new Skill(size, size, gulp, 0.65);
  const skillWebPack	  = new Skill(size, size, webpack, 0.65);

  function animate(options) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {

      // timeFraction от 0 до 1
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;

      // текущее состояние анимации
      let progress = options.timing(timeFraction);

      options.draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }
  let anim = function() {
    animate({
      duration: 700,
      timing: function(timeFraction) {
        return timeFraction;
      },
      draw: function(progress) {
        skillHtml5.draw(progress);
        skillCss3.draw(progress);
        skillJavaScript.draw(progress);
        skillAngular.draw(progress);
        skillPHP.draw(progress);
        skillMySQL.draw(progress);
        skillNode.draw(progress);
        skillMongo.draw(progress);
        skillGit.draw(progress);
        skillGulp.draw(progress);
        skillWebPack.draw(progress);
      },
    });
  };
  document.addEventListener('DOMContentLoaded', anim);
})(window, document);