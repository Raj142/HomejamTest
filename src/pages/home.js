import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import RemoveIcon from '@material-ui/icons/Remove';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import styles from './styles';
class Home extends React.Component {
	
    render(){
        return(
    <div>
            
<div class="main_container" id="home">
	
	<div class="navbar">
		<div class="logoimg">
		<div class="logo">
			<a href="#" style = {{marginTop: "30px"}}>HOMEJAM</a>
		</div>
		</div>
		
		<div class="navbar_items">
			<ul>
				<li ><SearchIcon style = {{color: "white"}} /></li>
				<li><a href="#">Search</a></li>
				<li><a href="#about">Help</a></li>
				<li><a href="#services">Account</a></li>
				<li><LocalMallIcon style = {{color: "white"}} /></li>
				{/* <li><i style={styles.nav} class="fa">&#x1f499;</i></li> */}
				<li></li>
				
			</ul>
		</div>
	</div>

	<div class="banner_image">
		<div class="banner_content">
			<h1 style={{fontSize: "100px"}}>Cari Cari<br /><br /> <p>Live from their sofa to yours. Get closer to your favourite 
				artists,and never miss out</p></h1>
					
		</div>
	</div>
	<div class="demo">
	   
	<div class="circle" style={{textAlign: "center", border: "1px solid white"}}>
				
				<FavoriteBorderIcon style={{ color: "blue" ,fontSize: "44px" ,lineHeight: "70px",marginTop: "1cm"}} />
				<br />
				<h1 style={{color: "white",lineHeight: "120px"}}>0</h1>
				<h1 style={{color: "white",lineHeight: "130px"}}>Label</h1>
				Label</div>
				<div class="circle" style={{textAlign: "center", border: "1px solid white"}}>
				
				<ImportantDevicesIcon style={{ color: "white" ,fontSize: "44px" ,lineHeight: "70px",marginTop: "1cm"}} />
				<br />
				<h1 style={{color: "white",lineHeight: "120px"}}>0</h1>
				<h1 style={{color: "white",lineHeight: "130px"}}>Label</h1>
				Label</div>
				<div class="circle" style={{textAlign: "center", border: "1px solid white"}}>
				
				<ImportantDevicesIcon style={{ color: "white" ,fontSize: "44px" ,lineHeight: "70px",marginTop: "1cm"}} />
				<br />
				<h1 style={{color: "white",lineHeight: "120px"}}>0</h1>
				<h1 style={{color: "white",lineHeight: "130px"}}>Label</h1>
				Label</div>
				<div class="circle" style={{textAlign: "center", border: "1px solid white"}}>
				
				<ImportantDevicesIcon style={{ color: "white" ,fontSize: "44px" ,lineHeight: "70px",marginTop: "1cm"}} />
				<br />
				<h1 style={{color: "white",lineHeight: "120px"}}>0</h1>
				<h1 style={{color: "white",lineHeight: "130px"}}>Label</h1>
				Label</div>	
	</div>	
		
	
{/* <!-- 	

	<div class="about" id="about">
		<h1 class="title">About Us</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, eveniet temporibus reprehenderit. Veniam sunt corrupti necessitatibus quam, quia doloribus nesciunt ut eveniet, alias aspernatur eum perferendis commodi doloremque recusandae tenetur quis cumque voluptatibus officiis ea excepturi dignissimos! Repellat molestias iusto dicta facere ipsum, harum maiores illum laborum tenetur? Explicabo, cupiditate!</p>
		<div class="btn"><a href="#">Learn More</a></div>
	</div> --> */}

	
<div class="ourteam" id="ourteam" style = {{width: "100%", height: "100%" , backgroundColor: "black"}}>
<div class="serv">
			<div class="serv1">
				<h1>Upcoming Shows</h1>
				
			</div>
			<div class="serv2"><h1>View all</h1></div>
		</div>
		<RemoveIcon style = {{color: "blue", marginRight: "1000px",fontSize: "100px"}}/>
		<div class="ourteam_wrapper" style = {{width: "100%", height: "100%"}}>
			<div class="team-1 team">
				<div class="team_members" data-name="nathan john"><img src="../assests/images/team1.jpg" alt="Team_Images" /></div>
				<div class="team_members" data-name="Alyssa Healy"><img src="../assests/images/team5.jpg" alt="Team_Images" /></div>
				<div class="team_members" data-name="Alec Stewart"><img src="../assests/images/team6.jpg" alt="Team_Images" /></div>
			</div>
			<div class="team-2 team">
				<div class="team_members" data-name="Michael Rippon"><img src="../assests/images/ll2.jpg" alt="Team_Images" /></div>
				<div class="team_members" data-name="Meg Lanning"><img src="../assests/images/i2.png" alt="Team_Images" /></div>
				<div class="team_members" data-name="Sophie Devine"><img src="../assests/images/i1.png" alt="Team_Images" /></div>
			</div>
		</div>
	</div>	

	<div class="services" id="services">
	<div class="serv1">
				<h1>Reviews</h1>
				
			</div>
			
		
		<RemoveIcon style = {{color: "blue", marginRight: "1400px",marginTop: "40px",fontSize: "100px"}}/>
		
		<div class="diff_services">
			<div class="diff_services_item">
				<img src="../assests/images/services-1.png" alt="service_image" />
				<h3 class="sub_title">Web Development</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
			<div class="diff_services_item">
				<img src="../assests/images/services-2.png" alt="service_image" />
				<h3 class="sub_title">App Development</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
			<div class="diff_services_item">
				<img src="../assests/images/services-3.png" alt="service_image" />
				<h3 class="sub_title">PSD to HTML</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
		</div>
	</div>





	


	  <div class="footer">
		<a href="#">HomeJam HomePage</a>
	</div>
</div>	
	
      </div>
        );
    }
}

export default Home;