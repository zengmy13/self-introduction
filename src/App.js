import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {theme} from "./theme";
import Layout from "./layout";
import ParticlesBg from 'particles-bg';


export default function App() {
    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [0.6, 0],
        scale: [.1, 0.4],
        position: "all",
        color: ["random", "#ff0000"],
        cross: "dead",
        random: 15
    };

    if (Math.random() > 0.85) {
        config = Object.assign(config, {
            onParticleUpdate: (ctx, particle) => {
                ctx.beginPath();
                ctx.rect(
                    particle.p.x,
                    particle.p.y,
                    particle.radius * 2,
                    particle.radius * 2
                );
                ctx.fillStyle = particle.color;
                ctx.fill();
                ctx.closePath();
            }
        });
    }
    return (
        <ThemeProvider theme={theme}>
            <Layout/>
            <ParticlesBg type="custom" config={config} bg={true}/>
        </ThemeProvider>
    )
}

