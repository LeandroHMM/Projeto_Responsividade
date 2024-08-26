import { Box, Grid, Typography } from "@mui/material";

const CenterGrid = () => {
  const videos = [
    {
      id: 1,
      title: "FEED DO USUARIO | Criando uma rede social",
      chanel: "Canal Aprendendo",
      date: "há uma semana",
      views: 9544,
      avatar: "/public/images/Leandro.jpeg",
      thumb: "/public/images/thumb3.png",
    },
    {
      id: 2,
      title: "FEED DO USUARIO | Criando uma rede social",
      chanel: "Canal Aprendendo",
      date: "há um mês",
      views: 4122,
      avatar: "/public/images/Leandro.jpeg",
      thumb: "/public/images/thumb2.png",
    },
    {
      id: 3,
      title: "FEED DO USUARIO | Criando uma rede social",
      chanel: "Canal Aprendendo",
      views: 8466,
      date: "há três meses",
      avatar: "/public/images/Leandro.jpeg",
      thumb: "/public/images/thumb3.png",
    },
    {
      id: 4,
      title: "FEED DO USUARIO | Criando uma rede social",
      chanel: "Canal Aprendendo",
      views: 3499,
      date: "há quatro dias",
      avatar: "/public/images/Leandro.jpeg",
      thumb: "/public/images/thumb4.png",
    },
    {
      id: 5,
      title: "FEED DO USUARIO | Criando uma rede social",
      chanel: "Canal Aprendendo",
      views: 7412,
      date: "há quatro meses",
      avatar: "/public/images/Leandro.jpeg",
      thumb: "/public/images/thumb5.png",
    },
    {
      id: 6,
      title: "FEED DO USUARIO | Criando uma rede social",
      chanel: "Canal Aprendendo",
      views: 2541,
      date: "há dois dias",
      avatar: "/public/images/Leandro.jpeg",
      thumb: "/public/images/thumb6.png",
    },
  ];

  return (
    <Box sx={{ padding: 4, display: "flex" }}>
      <Grid container spacing={2} paddingTop={2}>
        <Grid item lg={9} md={8} sm={12} xs={12} sx={{ bgcolor: "none"}}>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "white",
            }}
          >
            <img
              style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              alt="Vídeo Grande"
              src="/public/images/thumb6.png"
            />
            <Box sx={{ padding: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#000" }}>
                Tudo sobre React Hooks
              </Typography>
              <Typography variant="body1" sx={{ color: "#000" }}>
                Criação de hooks na prática
              </Typography>
            </Box>
          </Box>
        </Grid>
         

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Grid container spacing={2} >
            {videos.map((item, index) => (
              <Grid item key={index}>
                <Box sx={{ display: "flex", flexWrap: "wrap", bgcolor: "none" }}>
                  <img
                    style={{
                        position: "relative",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="white"
                    >
                      {item.title}
                    </Typography>
                    <Typography display="block" variant="body2" color="white">
                      {item.chanel}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {`${item.views} * ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CenterGrid;
