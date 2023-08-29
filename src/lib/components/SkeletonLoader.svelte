<style lang="scss">
    @keyframes flow {
        0% { background-position: -200px 0; };
        100% { background-position: calc(200px + 100%) 0; };
    }

    .skeleton {
        width: 340px;
        height: 240px;
        margin: 10px;
        background-color: #eee;
        background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
        border-radius: 4px;
        background-size: 200px 100%;
        background-repeat: no-repeat;
        border-radius: 4px;
        display: inline-block;
        line-height: 1;
        animation: flow 1.2s ease-in-out infinite;
    }
</style>

<span class="skeleton">&zwnj;</span>