import styled, { css } from 'styled-components'
import React from 'react';

const ButtonStyles = styled.div`
  
  font-family: 'Hind';
  color:#676767;
  background: #fbfbfb;
  cursor: default;

.card {
  background: #fff;
  border: 1px solid #eee;
  @include transition(all .35s ease);
  
  &:hover {
    border-color: #ddd;
    box-shadow: rgba(#0a9191,0.1) 0 0 5em;
    figure {
      @include transform(scale(0.6) translateY(-1.4em));
    }
    .card--title {
      @include transform(translateY(-5em));
    }
    .card--desc {
      visibility: visible;
      opacity: 1;
      @include transform(translateY(0));
      @include transition-duration(0.4s);
      p {
        opacity:1;
      }
      hr {
        @include transition-delay(0.1s);
        @include transform(scale(1,1));
      }
    }
    .card--social {
      li {
        opacity:1;
         @include transition-duration(0.3s);
        @include transition-delay(0.1s);
        @include transform(translate(0,0) rotate(0deg));
      }
    }
    .card--btn {
      a {
        background: #fbfbfb;
        border-color: #ddd;
      }
      .moreinfo {
        opacity:0;
        @include transform(translateY(-50px));
      }
      .fullprof {
        opacity: 1;
        @include transform(translateY(0));
      }
    }
  }
  figure {
    position: relative; z-index:299;
    width: 10em; height:10em;
    margin: 0 auto 1em;
    border-radius:50%; overflow:hidden;
    border: 1px solid #eee;
    padding: 4px;
    @include transform-origin(center top);
    @include transition(all .4s $ease-out-circ);
    img {
      width:100%; display:block;
      border-radius: 50%;
    }
  }
}

.card-liner {
  position: relative; overflow:hidden;
  padding: 2em;
}

.card--title {
  text-align: center;
  line-height: 1;
   @include transition(all .4s $ease-out-circ);
  h3 {
    margin: 0 0 .4em;
    font-size: 1.4em;
  }
  p {
    margin: 0 0 5em;
    color: #a5a5a5; font-size:.8em;
    text-transform: uppercase;
    letter-spacing: 2.2px;
  }
}

.card--desc {
  position:absolute;
  top:53.5%; left:9%; width:82%;
  text-align: center;
  padding-bottom: 0.8em;
  visibility: hidden;
  opacity:0;
  @include transform(translateY(3em));
  @include transition(all .02s $ease-out-circ);
  p {
    margin:0 0 .5em;
    font-weight:300;
    opacity:0;
    @include transition(all .55s ease 0.1s);
    span {
      text-decoration: line-through;
    }
  }
  hr {
    border: none;
    width: 3em;
    margin:0 auto .75em; height:3px; background: #0a9191;
    @include transform(scale(0,1));
     @include transition(all .4s $ease-out-circ 0.05s);
  }
}

.card--btn {
  text-align: center;
  position: absolute;
  bottom:0; left:0; width:100%;
   a {
     position: relative; overflow:hidden;
    display: block; line-height:1;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    font-size: .8em;
    color: #a5a5a5;
    padding: 1.4em 2em;
    border-top: 1px solid #eee;
     letter-spacing: 0.5px;
     @include transition(all .4s ease);
     .fullprof {
       display: block;
       opacity:0;
       color: #0a9191;
       @include transform(translateY(50px));
       @include transition(all .4s $ease-out-circ);
      }
     .moreinfo {
       display:block; position: absolute;
       top:0; left:0; width:100%; padding: 1.4em;
       opacity:1;
       @include transition(all .4s $ease-out-circ);
       i {margin-right: 5px;}
      }
  }
}


.card--social {
  position: absolute;
  top:3em; left:0; width: 100%;
  ul {
    list-style:none; margin:0; padding:2em;
    position: relative;
  }
  li {
    display: block;
    text-align: center;
    position: absolute; top:0;
    opacity:0;
    @include transition(all .02s $ease-out-circ);
    &.twitter {
      left: 72%;
      @include transform(translate(-200%, 1em) scale(0.7));
    }
     &.linkedin {
      right: 72%;
      @include transform(translate(200%, 1em) scale(0.7));
    }
  }
  a {
    line-height: 2.4;
    display: block;
    width: 2.3em; height: 2.3em;
    border-radius:50%;
    border: 1px solid #ccc;
    background: #fbfbfb;
    color: #0a9191; text-decoration: none;
    @include transition(all .3s ease);
    &:hover {
      background: #eee;
    }
  }
}
.wrap {
  max-width: 20em;
  margin: 3em auto;
}

.cred {
  position:fixed; bottom:0; left:0; width:100%;
  text-align: center;
  background: #fff;
  border-top: 1px solid #eee;
  text-decoration: none; 
  a {
    display:block; padding: 1em;
    text-decoration: none; 
    color: #ccc;
    font-weight: 300; 
    font-size: .9em;
    letter-spacing: .5px;
    i {margin-left: 10px;}
}
}
`

function CardBoard() {
  return (
    <ButtonStyles>
       <div class="wrap">
  
  <div class="card">
    <div class="card-liner">
    <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16737/profile/profile-512_1.jpg" alt="" />       </figure>
    <div class="card--social">
      <ul>
        <li class="twitter"><a href="#0"><i class="fa fa-twitter"></i></a></li>
        <li class="linkedin"><a href="#0"><i class="fa fa-linkedin"></i></a></li>
      </ul>
    </div>
    <div class="card--title">
      <h3>Colin McGraw</h3>
      <p>Web Developer</p>
    </div>
    <div class="card--desc">
      <hr />
      <p>Coffee, code, repeat... he doesn't eat food, and only stops to defend the table tennis crown.</p>
    </div>
      <div class="card--btn">
        <a href="#0">
          <span class="moreinfo"><i class="fa fa-info-circle"></i> More Info</span>
          <span class="fullprof">View Full Profile</span>
        </a>
      </div>
    </div>
  </div>
  

  <div class="card">
    <div class="card-liner">
    <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16737/profile/profile-512_1.jpg" alt="" />       </figure>
    <div class="card--social">
      <ul>
        <li class="twitter"><a href="#0"><i class="fa fa-twitter"></i></a></li>
        <li class="linkedin"><a href="#0"><i class="fa fa-linkedin"></i></a></li>
      </ul>
    </div>
    <div class="card--title">
      <h3>Colin McGraw</h3>
      <p>Web Developer</p>
    </div>
    <div class="card--desc">
      <hr />
      <p>Coffee, code, repeat... he doesn't eat food, and only stops to defend the table tennis crown.</p>
    </div>
      <div class="card--btn">
        <a href="#0">
          <span class="moreinfo"><i class="fa fa-info-circle"></i> More Info</span>
          <span class="fullprof">View Full Profile</span>
        </a>
      </div>
    </div>
  </div>
  

</div>

    </ButtonStyles>
 
  );
}

export default CardBoard;
