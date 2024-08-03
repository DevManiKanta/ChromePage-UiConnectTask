import Download from "@mui/icons-material/Download";

export const PageStyle={
    Parent:{
       backgroundColor:"black",
       height:"100vh"
    },
    navBar:{
        width:"100%",
        height:"10vh",
        display:"flex",
        alignItems:"center",
        justifyContent:'flex-start'
    },
    midSection:{
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        height:"30vh",
        width:"100%",
        flexDirection:"column",
        mt:"3%",
        backgroundColor:"white"
    },
    BuiltText:{
        fontSize:"4rem",
        lineHeight:"3.25rem",
        letterSpacing:"-0.125rem",
        fontFamily:"Google Sans, arial,sansSerif",
        fontWeight:"700",
        color:"#202124",
        p:'1px'
    },
    changedBox:{
        width:"35%",
        height:"11vh",
        border:"1px solid white",
        borderRadius:"50px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position: "relative"
    },
    BuiltMainBox:{
        width:"50%",
        display:"flex",
        alignItems:'center',
        justifyContent:"center",
        gap:'10px',
        m:"1px"

    },
    ChangeText:{
        fontFamily:"Roboto, Helvetica, Arial, sans-serif",
         fontStyle:"normal",
         fontWeight:"600",
         animationDelay: "10ms",
       animationDuration:"10s",
       animationName: "charBounceSlideInUp",
       animationPlayState: "paused",
     transition: 'transform 5s ease-in-out',
     fontSize: "3rem",
     lineHeight:"3.5rem",
     letterSpacing: "-0.078125rem"
     
    },
    ButtonParentBox:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"20px",
        flexDirection:"column"

    },
    downloadBtn:{
    mt:"3%",
    borderRadius: "32px",
    gap: "12px",
    padding: "20px 32px",
    textTransform:"none"
    },
    text:{
        fontFamily:"Google Sans Text, arial, sans-serif",
        fontWeight:"400",
        fontSize:"15px",
        lineHeight:"18px",
        color:"#5f6368"

    },
    FastMainBox:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        mt:"5%",
        textAlign:"center",
        gap:"10px",
        // opacity:"0"
    },
    fastchangedBox:{
        width:"12%",
        height:"10vh",
        border:"1px solid white",
        borderRadius:"50px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"15px",
        backgroundColor: "#ceead6",
         color: "#188038",
         m:'1%'
    },
    fastFont:{
        fontSize: "3rem",
        lineHeight:"3.5rem",
        letterSpacing: "-0.078125rem"
    },
    Fasttxt:{
        fontFamily:"Google Sans, arial, sans-serif",
        fontWeight:"700",
        fontSize:"72px",
        lineHeight:"56px",
        color:"#202124"

    },
    DownloadText:{
        fontFamily:"Google Sans , arial, sans-serif",
        fontWeight:"500",
        fontSize:"20px",
        lineHeight:"24px",
        color:"#ffffff"

    },
    MapPaper:{
        width: "2500px",
        height: "60vh",
        borderRadius: "5%",
        objectfit: 'cover', 
        aspectRatio: '16 / 9',
    }

}     

