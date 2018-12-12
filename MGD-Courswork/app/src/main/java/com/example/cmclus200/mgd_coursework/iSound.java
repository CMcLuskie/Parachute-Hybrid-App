package com.example.cmclus200.mgd_coursework;

import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.media.AudioAttributes;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.media.SoundPool;
import android.os.Build;
import android.webkit.JavascriptInterface;

public class iSound {

    private Context ctx;
    private SoundPool soundPool = null;
    private int[] soundIDs = new int[2];
    private String[] musicIDs = new String[1];
    private MediaPlayer mediaPlayer;
   
    iSound(final Context context)
    {
    //cache the app context
    ctx = context;
   
    //create a sound pool
    if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
    soundPool = new SoundPool.Builder().setMaxStreams(3).setAudioAttributes(
        new AudioAttributes.Builder().setContentType(
            AudioAttributes.CONTENT_TYPE_MUSIC).build()).build();
    }
    else {
    soundPool = new SoundPool(3, AudioManager.STREAM_MUSIC, 0);
    }
   
    //load soundPool into sound pool
    try {
    //Load sound using the asset file descriptor
    AssetFileDescriptor soundFile = ctx.getAssets().openFd("Sounds/coinCollect.wav");
    //store the id outputted by the sound pool in the sound effects array
    soundIDs[0] = soundPool.load(soundFile.getFileDescriptor(), soundFile.getStartOffset(), soundFile.getLength(), 0);
    //Load sound using the asset file descriptor
     soundFile = ctx.getAssets().openFd("Sounds/damageTaken.wav");
    //store the id outputted by the sound pool in the sound effects array
    soundIDs[1] = soundPool.load(soundFile.getFileDescriptor(), soundFile.getStartOffset(), soundFile.getLength(), 0);
    
    soundFile.close();
    }
    catch(Exception e) {
    e.printStackTrace();
    }
   
    musicIDs[0] = "Sounds/countryMusic.wav";
   
    mediaPlayer = new MediaPlayer();
    }
   
    @JavascriptInterface
    public void playSound(int id)
    {
    //sound pool is used for short sound clips
    soundPool.play(soundIDs[id], 1, 1, 0, 0, 1);
    }
   

    @JavascriptInterface
    public void playMusic(int id)
    {
        //media player is used for longer music tracks
        mediaPlayer.reset();//reset player as we are changing tracks

        try {
        //load the file and prepare the media player
        AssetFileDescriptor soundFile = 
            ctx.getAssets().openFd(musicIDs[id]);
        
        mediaPlayer.setDataSource(soundFile.getFileDescriptor()
            , soundFile.getStartOffset(), soundFile.getLength());
            
        soundFile.close();
        mediaPlayer.setLooping(true); //we set our music track to loop
        mediaPlayer.prepare();
        }
        catch (Exception e)
        {
        e.printStackTrace();
        }
        mediaPlayer.start();
        }
   }
